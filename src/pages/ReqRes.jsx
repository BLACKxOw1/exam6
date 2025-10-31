import React from 'react';
import './ReqRes.css'

function ReqRes() {


  return (
    <div className='flex flex-col items-center'>
      <h1 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200 self-start">
        ReqRes Users
      </h1>
      <div className='pt-4'>
        <div class="loader">
          <div class="box1"></div>
          <div class="box2"></div>
          <div class="box3"></div>
        </div>
      </div>
        <h1 className='text-3xl font-bold text-white pt-8'>Bu Page ni yakunla olmadim ustoz</h1>
        <h1 className='text-3xl font-bold text-white pt-2'>chunki api ishlamadi</h1>
    </div>
  );
}

export default ReqRes;

