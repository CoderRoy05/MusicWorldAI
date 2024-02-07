const fs = require('fs');
const express = require('express');
const path = require('path');
const multer = require('multer');
const { exec } = require('child_process');

const app = express();
const port = 3000;

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const vocalRemoverPath = path.join(__dirname, 'vocal-remover');

app.post('/api/upload', upload.single('audioFile'), (req, res) => {
    const audioBuffer = req.file.buffer;

    const pythonScript = path.join(vocalRemoverPath, 'inference.py');

    const command = `python "${pythonScript}" --input - --output_dir path/to/output/directory`;

    exec(command, { input: audioBuffer }, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        const inputFileName = '';  // Extract the input file name if needed
        const outputLocation = ''; // Extract the output location if needed

        res.json({ inputFileName, outputLocation });
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

