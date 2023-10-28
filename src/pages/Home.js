import React from 'react'
import { useState } from 'react';
import Navbar from '../components/Home page components/Navbar/Navbar'
 import Slide from '../components/Home page components/Slide/Slide'
import Concert from '../components/Home page components/Concert/Concert'

function Home() {

  return (
    <>
      <Navbar/>
      <Slide />
      <Concert />

    </>
  )
}

export default Home