import React, { useState } from 'react'

import './Navbar.css'
import Logo from '../../photo/Logo.svg'
import { HiMenu } from 'react-icons/hi';
import {  AiOutlineClose } from "react-icons/ai";
 



function Navbar({ showLogin, toggleShowLogin }) {
    const [menuOpen , setMenuOpen] = useState(false)
 
  return (
     <>
        <div className='Navbar_section'>
            <div className='Navbar_main'>
                <div className='Navbar_main_left'>
                    <img src={Logo} />  
                </div>
                <div className='Navbar_main_right'>
                    <ul>
                        <li>Ana sayfa</li>
                        <li>Konserler</li>
                        <li>Etkinlikler</li>
                        <li>Sinema</li>
                        <button onClick={toggleShowLogin}>Giriş Yap</button>
                     </ul>

                     <button className='Icon' onClick={()=> setMenuOpen(!menuOpen)}>
                  {menuOpen ? <AiOutlineClose /> : <HiMenu/>}

                  </button>
                </div>

                <div className={menuOpen ?'mob_navbar' : 'mob_hidden'} onClick={()=>setMenuOpen(false)}>
                    <ul >
                        <li>Ana sayfa</li>
                        <li>Konserler</li>
                        <li>Etkinlikler</li>
                        <li>Sinema</li>
                        <li></li>
                        <button onClick={toggleShowLogin}>Giriş Yap</button>
                    </ul> 
          </div>

            </div>
        </div>
     </>
  )
}

export default Navbar