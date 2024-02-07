// import React, { useState } from 'react';
// import axios from 'axios';

// const App = () => {
//     const [file, setFile] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const [inputFileName, setInputFileName] = useState('');
//     const [outputLocation, setOutputLocation] = useState('');

//     const handleFileChange = (event) => {
//         setFile(event.target.files[0]);
//     };

//     const handleUpload = async () => {
//         if (!file) {
//             alert('Please select a file');
//             return;
//         }

//         setLoading(true);

//         const formData = new FormData();
//         formData.append('audioFile', file);

//         try {
//             const response = await axios.post('http://localhost:3000/api/upload', formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                 },
//             });

//             console.log('Server Response:', response.data);

//             const { inputFileName, outputLocation } = response.data;

//             setInputFileName(inputFileName);
//             setOutputLocation(outputLocation);
//         } catch (error) {
//             console.error('Error uploading file:', error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div>
//             <input type="file" onChange={handleFileChange} />
//             <button onClick={handleUpload} disabled={loading}>
//                 Upload File
//             </button>
//             {loading && <p>Loading...</p>}

//             {inputFileName && (
//                 <div>
//                     <p>Input File: {inputFileName}</p>
//                     <p>Output Location: {outputLocation}</p>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default App;



import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('audioFile', selectedFile);

      await axios.post('http://localhost:3000/api/upload', formData);

      // Handle the response from the server as needed
      // ...
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload and Process</button>
    </div>
  );
}

export default App;

