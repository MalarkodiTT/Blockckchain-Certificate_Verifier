const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const multer = require('multer');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Serve uploaded PDFs

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('✅ MongoDB Atlas Connected Successfully!'))
.catch((err) => console.error('❌ MongoDB Connection Error:', err));

// Multer Storage Configuration for PDF Uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadDir = path.join(__dirname, 'uploads');
        const fs = require('fs');
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir);
        }
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage: storage });

// --- Schemas & Models ---
const studentSchema = new mongoose.Schema({
    regNo: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    course: { type: String, required: true },
    certificateId: { type: String },
    pdfPath: { type: String },
    issueDate: { type: String },
    hashCode: { type: String },
    isValidOnChain: { type: Boolean, default: true }
});
const Student = mongoose.model('Student', studentSchema);

// --- API Routes ---

// 1. Admin Upload Certificate Route
app.post('/api/admin/upload', upload.single('certificatePdf'), async (req, res) => {
    try {
        const { certificateId, studentName, regNo, course } = req.body;
        const pdfPath = req.file ? `/uploads/${req.file.filename}` : '';
        const hashCode = '0x' + Math.random().toString(16).substring(2, 42); // Dummy Blockchain Hash

        // Check if student already exists, update or create
        let student = await Student.findOne({ regNo });
        if (student) {
            student.certificateId = certificateId;
            student.name = studentName;
            student.course = course;
            student.pdfPath = pdfPath;
            student.hashCode = hashCode;
            student.issueDate = new Date().toLocaleDateString();
            await student.save();
        } else {
            student = new Student({
                regNo,
                name: studentName,
                email: `${regNo}@student.com`,
                password: '123', // Default password for demo
                course,
                certificateId,
                pdfPath,
                hashCode,
                issueDate: new Date().toLocaleDateString(),
                isValidOnChain: true
            });
            await student.save();
        }

        res.status(200).json({ success: true, message: 'Certificate stored successfully!' });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// 2. Student Register / Login
app.post('/api/student/login', async (req, res) => {
    try {
        const { regNo, password } = req.body;
        const student = await Student.findOne({ regNo, password });
        if (!student) {
            return res.status(400).json({ success: false, message: 'Invalid Reg No or Password!' });
        }
        res.status(200).json({ success: true, data: student });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

app.post('/api/student/register', async (req, res) => {
    try {
        const { regNo, name, email, password, course } = req.body;
        const existing = await Student.findOne({ regNo });
        if (existing) {
            return res.status(400).json({ success: false, message: 'Reg No already exists!' });
        }
        const newStudent = new Student({ regNo, name, email, password, course, isValidOnChain: true });
        await newStudent.save();
        res.status(201).json({ success: true, message: 'Registered successfully!' });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// 3. Verifier Route (By Reg No)
app.get('/api/verify/:regNo', async (req, res) => {
    try {
        const student = await Student.findOne({ regNo: req.params.regNo });
        if (!student || !student.certificateId) {
            return res.status(404).json({ success: false, message: 'Certificate not found for this Reg No!' });
        }
        res.status(200).json({ success: true, data: student });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));