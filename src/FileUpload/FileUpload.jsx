// import React, { useState } from 'react';

// const FileUpload = () => {
//     const [file, setFile] = useState(null);

//     const handleFileChange = (event) => {
//         const selectedFile = event.target.files[0];
//         setFile(selectedFile);
//     };

//     const handleUpload = () => {
//         // Use fetch or Axios to send the file to the backend
//         const formData = new FormData();
//         formData.append('audioFile', file);

//         fetch('/api/upload', {
//             method: 'POST',
//             body: formData,
//         })
//         .then(response => response.json())
//         .then(data => {
//             // Handle the response from the backend
//             console.log(data);
//         })
//         .catch(error => console.error('Error:', error));
//     };

//     return (
//         <div>
//             <input type="file" onChange={handleFileChange} />
//             <button onClick={handleUpload}>Upload</button>
//         </div>
//     );
// };

// export default FileUpload;


import React, { useState } from 'react';

const FileUpload = () => {
    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false);

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
    };

    const handleUpload = () => {
        if (!file) {
            console.error('Please select a file before uploading.');
            return;
        }
    
        // Set the uploading state to true when starting the upload
        setUploading(true);
    
        const formData = new FormData();
        formData.append('audioFile', file);
    
        fetch('/api/upload', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            console.log('Server Response:', data);
            // Handle the response from the backend as needed
    
            // Reset the file and set uploading state to false after processing
            setFile(null);
            setUploading(false);
        })
        .catch(error => {
            console.error('Error:', error);
            // Handle errors as needed
    
            // Reset the uploading state on error
            setUploading(false);
        });
    };
    

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload} disabled={uploading}>
                {uploading ? 'Uploading...' : 'Upload'}
            </button>
        </div>
    );
};

export default FileUpload;
