import Counter from '@/Components/Counter/Counter';
import React from 'react';

export const metadata = {
  title: "Create Next App - calculation",
  description: "Generated by create next app",
};
const Calculation = () => {
  return (
    <div>
      <h1 className='text-center text-4xl'>This page is for calculation</h1>
      <div className='flex justify-center items-center'>
        <Counter></Counter>
      </div>
    </div>
  );
};

export default Calculation;