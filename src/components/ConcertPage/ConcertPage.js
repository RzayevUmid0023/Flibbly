import React from 'react'
import styles from './ConcertPage.module.css'
import Banner from '../../photo/Consertpage/Bannervideo.mp4'
import tickets from './tickets'



function ConcertPage() {
  return (
    <>
        <div className={styles.Section}>

            <div className={styles.Banner}>
                <video src={ Banner }  className={styles.Banner_video} autoPlay muted loop={false}/>
                <span></span>
            </div>

            <div className={styles.Ticket}>
                    <h1 className={styles.Section_header_text}>Konserler</h1>

                    <div className={styles.Section_tickets}>
                        
                        {tickets.map(ticket => (
                          <div className={styles.Section_ticket}>
                            <div className={styles.Section_ticket_photo}>
                                <img src={ticket.photo}/>
                                <div className={styles.ticket_text}>
                                    <h5>{ticket.title}</h5>
                                    <h6>{ticket.artist}</h6>
                                    <h4>{ticket.location}</h4>
                                    <h3>{ticket.date}</h3>
                                </div>
                            </div>
                          </div>
                        ))}
                    </div>

            </div>
        </div>
    </>
   
  )
}

export default ConcertPage
