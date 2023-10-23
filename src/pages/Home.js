import React from 'react'
import { useState } from 'react';
import Navbar from '../components/Navbar/Navbar'
import LoginPage from '../components/Login/Login'
import Slide from '../components/Slide/Slide'
import Concert from '../components/Concert/Concert'

function Home() {

  const [showLogin, setShowLogin] = useState(false);

  const toggleShowLogin = () => {
    setShowLogin(!showLogin);
  };

  return (
    <>
     <Navbar showLogin={showLogin} toggleShowLogin={toggleShowLogin} />
       
     <div style={{ display: showLogin ? 'flex' : 'none' }}>
        <LoginPage showLogin={showLogin} toggleShowLogin={toggleShowLogin} />
      </div>
      
      <Slide />
      <Concert />

    </>
  )
}

export default Home