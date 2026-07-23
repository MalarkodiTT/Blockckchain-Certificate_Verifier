async function verifyCertificate() {
    const certId = document.getElementById('certIdInput').value.trim();
    const resultContainer = document.getElementById('resultContainer');

    if (!certId) {
        alert('Please enter a Certificate ID!');
        return;
    }

    resultContainer.classList.remove('hidden');
    resultContainer.innerHTML = `<p style="color: #38bdf8;">Searching Blockchain & Database records...</p>`;

    try {
        const response = await fetch(`/api/certificates/${certId}`);
        const result = await response.json();

        if (result.success) {
            const cert = result.data;
            resultContainer.innerHTML = `
                <div class="success-box">
                    <h3>✅ Valid Certificate (Verified on Blockchain)</h3>
                    <p><strong>Student Name:</strong> ${cert.studentName}</p>
                    <p><strong>Course:</strong> ${cert.course}</p>
                    <p><strong>Issue Date:</strong> ${cert.issueDate}</p>
                    <p><strong>Issuer:</strong> ${cert.issuer}</p>
                    <hr style="border: 0.5px solid #34d399; margin: 10px 0;">
                    <p style="font-size: 0.85rem; word-break: break-all;"><strong>IPFS Hash:</strong> ${cert.ipfsHash}</p>
                    <p style="font-size: 0.85rem; word-break: break-all;"><strong>Tx Hash:</strong> ${cert.txHash}</p>
                </div>
            `;
        } else {
            resultContainer.innerHTML = `
                <div class="error-box">
                    ❌ Invalid Certificate! No records found matching this ID on the blockchain ledger.
                </div>
            `;
        }
    } catch (error) {
        resultContainer.innerHTML = `
            <div class="error-box">
                ⚠️ Server Error! Please check your connection.
            </div>
        `;
    }
}