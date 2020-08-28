import React from 'react';

function Preloader() {
  return (
    <div className="preloaderWrapper">
      <div className="spinner-border text-danger ml-5" role="status">
        <span className="sr-only"></span>
      </div>
    </div>
  );
}

export default Preloader;
