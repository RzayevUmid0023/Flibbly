 import React from 'react';
import { tickets } from '../../../ticketsprice'; 
import styles from './ConcertAboutPagePrice.module.css'; 
import { Link } from 'react-router-dom'; 

 
function App() {
  return (
    <div className={styles.price}>
      <div className={styles.price_main}>
        <div className={styles.header_text}>
          <h1>Ezginin Günlüğü Biletleri ve Fiyatları</h1>
        </div>
        {tickets.map((ticket) => ( 
          <div className={styles.price_box} key={ticket.city}>
            <div className={styles.price_box_left}>
              <div className={styles.left_top}>
                <h1 className={styles.price_box_city}>{ticket.city}</h1>
                <h3 className={styles.ticket_name}>{ticket.name}</h3>
              </div>
              <div className={styles.left_bottom}>
                <div className={styles.mini_date_box}>
                  <div className={styles.mini_month}>{ticket.month}</div>
                  <div className={styles.mini_day}>{ticket.day}</div>
                </div>
                <div className={styles.big_date_box}>
                  <div className={styles.big_date}>{ticket.date}</div>
                  <div className={styles.big_location}>{ticket.location}</div>
                </div>
              </div>
            </div>
            <div className={styles.price_box_right}>
              <div className={styles.ticket_price}>{ticket.price}</div>
              <div className={styles.ticket_buy}>
                <Link className={styles.buy_button}>Bilet Al</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
