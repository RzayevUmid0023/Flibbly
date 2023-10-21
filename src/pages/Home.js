import React from 'react'
import { useState } from 'react';
import Navbar from '../components/Navbar/Navbar'
import LoginPage from '../components/Login/Login'

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
    </>
  )
}

export default Home