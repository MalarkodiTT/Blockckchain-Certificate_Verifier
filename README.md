# 🌐 SECURE ACADEMIC CHAIN: DECENTRALIZED CREDENTIAL VERIFICATION SYSTEM
------------------------------------------------------------------------------

Live Link: https://blockckchain-certificate-verifier.onrender.com/


## 📋 SECTION 1: EXECUTIVE PROJECT SUMMARY
--------------------------------------------------------------------------------
Secure Academic Chain is an advanced, enterprise-grade decentralized academic 
credential issuance and verification platform engineered to eradicate diploma 
mills, document forgery, and institutional fraud. By bridging educational 
institutions, enrolled students, and third-party corporate verifiers into a 
unified cryptographic ecosystem, the platform ensures absolute data integrity 
through immutable ledger referencing and secure hash-based validation pipelines.

Traditional verification workflows rely heavily on manual paperwork, postal 
correspondences, and time-consuming telephone inquiries. This platform automates 
the entire lifecycle—from university-side credential minting to instant public 
auditing—ensuring a trustless, transparent, and ultra-secure educational framework.


## 🏗️ SECTION 2: SYSTEM ARCHITECTURE & DATA FLOW
--------------------------------------------------------------------------------
The application functions on a robust client-server architecture backed by a 
cloud-native NoSQL database cluster, ensuring high availability and low latency:

1. **The Issuance Layer (Admin Portal):**
   - Authorized administrative personnel authenticate securely into the system.
   - Student details (Name, Register Number, Course) along with the official 
     PDF certificate binary are uploaded.
   - The backend processes the payload, generates a unique cryptographic hash 
     fingerprint, and commits the record to the decentralized ledger database.

2. **The Student Vault Layer (Student Portal):**
   - Students register and establish secure credentials to access their dashboard.
   - The dashboard queries the ledger dynamically, rendering real-time validation 
     states, certificate identifiers, and direct PDF download streams.

3. **The Audit Layer (Public Verifier Portal):**
   - External stakeholders, employers, or verification agencies access the portal 
     without requiring login friction.
   - Querying a student's unique Register Number instantly pulls up cryptographic 
     proofs, verifying whether the academic credential is valid, altered, or revoked.


## ✨ SECTION 3: KEY MODULES & TECHNICAL CAPABILITIES
--------------------------------------------------------------------------------
* **Role-Based Access Control (RBAC):** Strict logical separation between administrative 
  issuance consoles, student personal vaults, and public verification nodes.
* **Cryptographic Hashing Engine:** Generates immutable ledger identifiers for every 
  uploaded file, ensuring any minor modification in source documents breaks the chain.
* **Dynamic Multipart Document Management:** Employs advanced middleware streaming 
  protocols (`multer`) to securely store, map, and retrieve PDF credentials.
* **Web3 Glassmorphism Interface:** Designed completely from scratch using modern 
  CSS3 design systems, featuring dark-mode aesthetics, responsive grid layouts, 
  neon gradient highlights, and fluid micro-interactions.


## 🛠️ SECTION 4: DETAILED TECH STACK
--------------------------------------------------------------------------------
* **Frontend Architecture:** 
  - HTML5 (Semantic Markup)
  - CSS3 (Custom Glassmorphism Design System, Flexbox, CSS Grid)
  - Vanilla JavaScript (ES6+ Asynchronous Fetch APIs, DOM Manipulation)
* **Backend Runtime & Framework:** 
  - Node.js (Asynchronous Event-Driven Runtime Environment)
  - Express.js (Fast, unopinionated minimalist web framework for routing)
* **Database & ODM Layer:** 
  - MongoDB Atlas (Cloud-hosted distributed NoSQL document database)
  - Mongoose ODM (Elegant mongodb object modeling for node.js)
* **File Handling & Security:** 
  - Multer (Multipart/form-data handling middleware for binary files)
  - Dotenv (Environment variable security management)


## 📂 SECTION 5: COMPLETE DIRECTORY STRUCTURE
--------------------------------------------------------------------------------
secure-academic-chain/
├── public/
│   ├── index.html              # Centralized Web3 Gateway Portal Landing
│   ├── admin-login.html        # University Administrative Authentication
│   ├── admin-dashboard.html    # Credential Issuance & Ledger Push Console
│   ├── student-login.html      # Student Registration & Secure Auth Hub
│   ├── student-dashboard.html  # Student Personal Vault & PDF Downloader
│   ├── verifier.html           # Public Credential Verification Node Interface
│   └── style.css               # Global Web3 Design System & Theme Stylesheet
├── uploads/                    # Local Storage Engine for Verified PDFs (Git-ignored)
├── server.js                   # Core Express Application & Route Controller Engine
├── package.json                # Project Dependencies & Script Manifest
├── .env                        # Private Database & Server Secrets Configuration
└── README.md                   # Comprehensive Project Documentation

## 🔌 SECTION 6: API ENDPOINTS DOCUMENTATION
--------------------------------------------------------------------------------
| HTTP Method | Route Endpoint        | Description & Purpose                      | Access Level   |
| :---        | :---                  | :---                                       | :---           |
| **POST**    | `/api/admin/login`    | Authenticates university administrator     | Admin Only     |
| **POST**    | `/api/admin/issue`    | Uploads credentials & generates hash block | Admin Only     |
| **POST**    | `/api/student/register| Registers a new student profile vault      | Public Student |
| **POST**    | `/api/student/login`  | Authenticates student secure login session | Student Portal |
| **GET**     | `/api/verify/:regNo`  | Queries ledger for certificate authenticity| Public Verifier|

## 🚀 SECTION 7: LOCAL INSTALLATION & SETUP GUIDE
--------------------------------------------------------------------------------
Follow these rigorous steps to configure and execute the application locally:

Step 1: Clone the Repository
git clone [https://github.com/your-username/secure-academic-chain.git](https://github.com/your-username/secure-academic-chain.git)
cd secure-academic-chain

Step 2: Install Node Dependencies
npm install

Step 3: Configure Environment Variables
Create a file named .env in the root directory and configure your cluster connection:
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/academic-chain?retryWrites=true&w=majority

Step 4: Boot Up the Development Server
npm run dev
Open your browser and navigate to: http://localhost:5000


## 🛡️ SECTION 8: SECURITY MEASURES & BEST PRACTICES
--------------------------------------------------------------------------------
* **NoSQL Injection Defenses:** Strict parameter filtering implemented across all 
  authentication routes and database query pipelines.
* **Directory Traversal Prevention:** Secure file allocation controls via Multer 
  ensure uploaded assets cannot execute arbitrary commands on the server environment.
* **Environment Isolation:** Sensitive database URI strings and operational port 
  parameters are strictly externalized via `.env` configuration files to prevent credential leaks.


## 📄 SECTION 9: LICENSE & OPEN SOURCE TERMS
--------------------------------------------------------------------------------
This project is developed for advanced academic evaluation and open-source 
distribution under the terms of the **MIT License**. You are free to copy, modify, 
distribute, and build upon this software with proper attribution.
