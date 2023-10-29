
import React from 'react'
import styles from './ConcertAboutPageBanner.module.css'
import { Link, useLocation } from 'react-router-dom' 

function ConcertPageBanner() {
   const location = useLocation();
  const ticket = location.state;

  return (
    <>
        <div className={styles.Banner}>
            <span className={styles.Dark_tema}></span>

            <div className={styles.Banner_main}>
                <div className={styles.Box_image}>
                    <img src={ticket.photo}/>
                </div>
                

                <div className={styles.Box_text}>

                
                    <h1 className={styles.isim}>{ticket.artist}</h1>   
                    <h3 className={styles.sehir_sahne}>{ticket.location}</h3>
                    <h4 className={styles.date}>{ticket.date}</h4>    

                    <p className={styles.about}>{ticket.about}</p>

                    <Link className={styles.button}>Satın Al</Link>
                </div>
                
            </div>
            <p className={styles.about_hidden}>{ticket.about}</p>


        </div>
    
    </>
   )
}

export default ConcertPageBanner
