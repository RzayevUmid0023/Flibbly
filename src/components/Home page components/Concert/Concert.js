import React from 'react'
import styles from './Concer.module.css'
import '../../../App.css'
import bigImage from '../../../photo/Consert/Consrt1.jpg'
import small1 from '../../../photo/Consert/Consert2.jpg'
import small2 from '../../../photo/Consert/Consert3.webp'
import small3 from '../../../photo/Consert/cosert4 4.jpg'
import small4 from '../../../photo/Consert/conser5.jpg'


function Concert() {
  return (
    <>

    <div className={styles.container}>
        <div className={styles.container_main}>
            <div className={styles.top}>
                <h1>Konserler</h1>
            </div>


            <div className={styles.bottom}>
                <div className={styles.container_main_left + " " + styles.container_main_child }>
                    <div className={styles.container_main_left_box}>
                        <div className={styles.big_box + " " + styles.box}>
                            <span></span>
                            <div className={styles.box_text}>
                                <h3>Derya Uluğ</h3>
                                <p>İstanbul Harbiye / Harbiye Cemil Topuzlu Açıkhava Sahnesi</p>
                            </div>

                            <div className={styles.big_box_date}>
                                <h6>31</h6>
                                <p>Ekim</p>
                                <p>2023</p>
                            </div>
                            
                             
                            
                            
                        </div>
                    </div>
                </div>

                <div className={styles.container_main_right + " " + styles.container_main_child }>
                    <div className={styles.container_main_right_box }>
                        <div className={styles.container_main_right_box_child1 }>
                            <div className={styles.small_box_1 + " " + styles.box + " " + styles.small_box }>
                            <span></span>
                            <div className={styles.box_text}>
                                <h3>Ezginin Günlüğü</h3>
                                <p>Bursa / BAOB Sahne, Bursa</p>
                            </div>

                            <div className={styles.small_box_date}>
                                <h6>31</h6>
                                <p>Ekim</p>
                                <p>2023</p>
                            </div>
                           


                            </div>
                            <div className={styles.small_box_2 + " " + styles.box + " " + styles.small_box }>
                            <span></span>
                            <div className={styles.box_text}>
                                <h3>mor ve ötesi</h3>
                                <p>Ankara / Ankara Armada AVM</p>
                            </div>
                            <div className={styles.small_box_date}>
                                <h6>03</h6>
                                <p>Kasım</p>
                                <p>2023</p>
                            </div>

                            </div>
                        </div>
                        <div className={styles.container_main_right_box_child2 }>
                            <div className={styles.small_box_3 + " " + styles.box + " " + styles.small_box }>
                            <span></span>
                            <div className={styles.box_text}>
                                <h3>An Symphony & Madrigal</h3>
                                <p>Ankara / CSO ADA ANKARA Ana Salon</p>
                            </div>
                            <div className={styles.small_box_date}>
                                <h6>31</h6>
                                <p>Ekim</p>
                                <p>2023</p>
                            </div>
                                
                            </div>
                            <div className={styles.small_box_4 + " " + styles.box + " " + styles.small_box }>
                            <span></span>
                            <div className={styles.box_text}>
                                <h3>Grup Abdal</h3>
                                <p>Bursa / BAOB Sahne, Bursa</p>
                            </div>
                            <div className={styles.small_box_date}>
                                <h6>31</h6>
                                <p>Ekim</p>
                                <p>2023</p>
                            </div>

                            </div>
                        </div>
                        
                    

                    </div>

                </div>
            </div>
            

        </div>
        
    </div>



    </>
  )
}

export default Concert;
 