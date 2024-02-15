import Link from 'next/link';
import React from 'react';

const HomePage = () => {

  return (
    <div>
      <p>This is home page</p>
      <Link href='/about'><button className='btn btn-accent'>About</button></Link>
      <Link href='/contact'><button className='btn btn-accent'>contact</button></Link>
      <Link href='/calculation'><button className='btn btn-accent'>calculation</button></Link>
      <Link href='/news'><button className='btn btn-accent'>news</button></Link>
      <Link href='/products'><button className='btn btn-accent'>products</button></Link>
      <Link href='/album'><button className='btn btn-accent'>Album</button></Link>
    </div>
  );
};

export default HomePage;