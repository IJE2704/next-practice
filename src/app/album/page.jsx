import React from 'react';

import p1 from '@/assets/pic1.png'
import p2 from '@/assets/pic2.png'
import p3 from '@/assets/pic3.png'
import p4 from '@/assets/pic4.png'
import Image from 'next/image';
const page = () => {
  return (
    <div>
      <h1>album page</h1>
      <Image 
      src={p1}
      ></Image>
      <Image 
      src={p2}
      ></Image>
      <Image 
      src={p3}
      ></Image>
      <Image 
      src={p4}
      ></Image>
    </div>
  );
};

export default page;