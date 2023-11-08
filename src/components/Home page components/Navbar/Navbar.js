import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'; 
import Logo from '../../../photo/Logo.png';
import { HiMenu } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';


function Navbar({ showLogin, toggleShowLogin }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className={styles.Navbar_section}>
        <div className={styles.Navbar_main}>
          <div className={styles.Navbar_main_left}>
            <img src={Logo} alt="Logo" />
          </div>
          <div className={styles.Navbar_main_right}>
            <ul>
              <li><Link to={"/ "} className={styles.ullink}>Anasayfa</Link></li>
              <li><Link to={"/concert"} className={styles.ullink}>Konserler</Link></li>
              <li>Etkinlikler</li>
              <li>Haritalar</li>
              <button ><Link to="/login" className={styles.a}>Giriş yap</Link></button>
            </ul>

            <button className={styles.Icon} onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <AiOutlineClose /> : <HiMenu />}
            </button>
          </div>

          <div className={menuOpen ? styles.mob_navbar : styles.mob_hidden} onClick={() => setMenuOpen(false)}>
            <ul>
            <li><Link to={"/ " }className={styles.li} >Anasayfa</Link></li>
            <li><Link to={"/concert"} className={styles.li} >Konserler</Link></li>
            <li><Link to={"/concert"} className={styles.li} >Etkinlikler</Link></li>
            <li><Link to={"/concert"} className={styles.li} >Sinema</Link></li>

               
               <button>
                 <Link to="/login" className={styles.a} >Giriş yap</Link>
              </button>
            </ul>
          </div>
        </div>
      </div>  
    </>
  );
}

export default Navbar;
