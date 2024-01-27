import React, { useEffect, useState } from 'react';
import './App.css';

import FileUpload from './FileUpload/FileUpload';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for demonstration purposes
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    // 7000

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);


  return (
    <div className={`app ${loading ? 'loading' : ''}`}>
      <div className="container">
          {/* Preloader */}
          {loading && (
            <div className="preloader">
              <div className="spinner"></div>
            </div>
          )}
          {/* Preloader */}

          <FileUpload />


          <div id="content">
            {/* Website page content */}
            <h1>Welcome to Your Website</h1>
          </div>

      </div>
    </div>
  );
};

export default App;
