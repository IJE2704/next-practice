import React from 'react';

const LoadingPage = () => {
  return (
    <div className='flex justify-center items-center'>
      <h1>Loading</h1>
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  );
};

export default LoadingPage;