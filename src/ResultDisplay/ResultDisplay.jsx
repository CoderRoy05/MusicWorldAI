// import React, { useState } from 'react';

// const ResultDisplay = () => {
//   const [result, setResult] = useState(null);

//   const handleResult = () => {
//     // Fetch the result from the server
//     fetch('/api/result') // Assuming you have an endpoint to get the result
//       .then(response => response.json())
//       .then(data => {
//         // Handle the result data
//         console.log(data);
//         setResult(data); // Update the state with the result
//       })
//       .catch(error => console.error('Error:', error));
//   };

//   return (
//     <div>
//       <button onClick={handleResult}>Get Result</button>
//       {result && (
//         <div>
//           <h2>Music Separation Result</h2>
//           <div>
//             <h3>Vocal Track</h3>
//             {/* Render vocal information */}
//             <audio controls>
//               <source src={result.vocalUrl} type="audio/wav" />
//               Your browser does not support the audio tag.
//             </audio>
//           </div>
//           <div>
//             <h3>Instrumental Track</h3>
//             {/* Render instrumental information */}
//             <audio controls>
//               <source src={result.instrumentUrl} type="audio/wav" />
//               Your browser does not support the audio tag.
//             </audio>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ResultDisplay;


import React, { useState } from 'react';

const ResultDisplay = () => {
  const [result, setResult] = useState(null);

  const handleResult = () => {
    // Fetch the result from the server
    fetch('/api/result') // Assuming you have an endpoint to get the result
      .then(response => response.json())
      .then(data => {
        // Handle the result data
        console.log(data);
        setResult(data); // Update the state with the result
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    <div>
      {/* Removed the button, assuming the result is fetched automatically */}
      {result && (
        <div>
          <h2>Music Separation Result</h2>
          <div>
            <h3>Vocal Track</h3>
            {/* Render vocal information */}
            <audio controls>
              <source src={`data:audio/wav;base64,${result.vocal}`} type="audio/wav" />
              Your browser does not support the audio tag.
            </audio>
          </div>
          <div>
            <h3>Instrumental Track</h3>
            {/* Render instrumental information */}
            <audio controls>
              <source src={`data:audio/wav;base64,${result.instrument}`} type="audio/wav" />
              Your browser does not support the audio tag.
            </audio>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResultDisplay;
