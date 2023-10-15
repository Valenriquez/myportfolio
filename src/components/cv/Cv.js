import React from 'react'
import { useEffect } from 'react';

function Cv() {
    return (
      <div>
        <iframe
          src="/myCV.pdf"
          title="CV"
          width="100%"
          height="1400px" // Adjust the height as needed
        ></iframe>
      </div>
    );
  }

export default Cv
