import React from 'react'
import Background from '../components/backgroundImage';
import WhatIsERP from '../components/whatIsErp';
import History from '../components/history';
import Footer from '../components/footer';

export default function landing() {
  return (
    <div>
      <div className='flex flex-col justify-center'>
        <Background/>
        <WhatIsERP/>
        <History/>
        <Footer/>
      </div>
    </div>
  )
}
