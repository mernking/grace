import Portfoliopg from '@/components/pages/Portfoliopg';
import React from 'react'
import "@/components/css/portfolio.css"

export default function page() {
  return (
    <div className='portfoliopg'>
      <div className="title text-center pb-3">
        <h1 className="font-grace">Portfolio</h1>
      </div>
      <div className="portsection px-2 w-full flex flex-wrap justify-center items-center">
        <Portfoliopg />
      </div>
    </div>
  );
}
