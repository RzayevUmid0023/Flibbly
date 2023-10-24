import React from 'react'
import { useState } from 'react';
import Navbar from '../components/Navbar/Navbar'
 import Slide from '../components/Slide/Slide'
import Concert from '../components/Concert/Concert'

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