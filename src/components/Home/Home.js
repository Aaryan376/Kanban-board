import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Hero from '../Hero/Hero';
import Navbar from '../Navbar/Navbar';
const Home = () => {
  return (
    <div className='flex divide-x-2'>
      <Sidebar />
      <div className='w-full divide-y-2'>
          <Navbar />
        <Hero />
      </div>

    </div>
  )
}

export default Home;