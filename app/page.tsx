"use client";
import Image from 'next/image'
import styles from './page.module.css'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useState } from 'react';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Home() {
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  const [data, setData] = useState({
    labels: labels,
    datasets: [{
      label: 'Expenses by Month',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: [
        'rgb(153, 102, 255)'
      ],
      borderColor: [
        'rgb(153, 102, 255)'
      ],
      borderWidth: 1
    }]
  });
  return (
    <main className={styles.body}>
      <div className={styles.header}>
        <a className={styles.logo_img}>
          <Image
            src="/logo.png" 
            alt="360Med"
            id={styles.logo_img} 
            width={110}
            height={40}
          ></Image>
        </a>
        <div className={styles.search}>
          <input id={styles.search} type="text" placeholder="Search..."></input>
          {/* <button id={styles.search_btn}>&#x1f50d;</button> */}
          <button id={styles.search_btn}><div id={styles.search_icn}>&#9906;</div></button>
        </div>
        <a className={styles.account} href="login.html">
          <button id={styles.account} className={styles.hoverEffect}>Logout</button>
        </a>
      </div>
      <br></br>
      <div className={styles.filter}>
          <button className={styles.f_btn}>&#65125;</button>
          <button className={styles.f_btn}>&#65125;</button>
          <button className={styles.f_btn}>&#65125;</button>
          <button className={styles.f_btn}>&#65125;</button>
          <button className={styles.f_btn}>&#65125;</button>
          <button className={styles.f_btn}>&#65125;</button>
          <button className={styles.f_btn}>&#65125;</button>
          <button className={styles.f_btn}>&#65125;</button>
          <button className={styles.f_btn}>&#65125;</button>
          <button className={styles.f_btn}>&#65125;</button>
          <button className={styles.f_btn}>&#65125;</button>
          <button className={styles.f_btn}>&#65125;</button>
          <button className={styles.f_btn}>&#65125;</button>
          <button className={styles.f_btn}>&#65125;</button>
          <button className={styles.f_btn}>&#65125;</button>
          <button className={styles.f_btn}> ? </button>
        </div>
      <div className={styles.main}>
        <Bar data={data} id={styles.vis}/>
      </div>
      <div className={styles.footer}>
        <a className={styles.logo}>
          <Image
            src="/logo.png" 
            alt="360Med"
            id={styles.logo}
            width={110}
            height={40}
          ></Image>
        </a>
        <a id={styles.about}>About</a>
        <a id={styles.team}>Team</a>
        <a id={styles.contact}>Contact</a>
        <a id={styles.help}>Help</a>
        <p id={styles.copyright}>Copyright©2023 360Med</p>
      </div>
    </main>
  )
}