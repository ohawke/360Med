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
  const labels = ['2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'];
  const [data, setData] = useState({
    labels: labels,
    datasets: [{
      label: 'Mortality by Year',
      data: [65, 59, 80, 81, 56, 65, 59, 80, 81, 56],
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
          <button id={styles.search_btn}><div id={styles.search_icn}>&#9906;</div></button>
        </div>
        <a className={styles.account} href="login.html">
          <button id={styles.account} className={styles.hoverEffect}>Logout</button>
        </a>
      </div>
      <br></br>
      <div className={styles.filter}>
          <div className={styles.f_btn} id={styles.f_label}>Filter</div>
          <select className={styles.f_btn} name="chart_type">
            <option value="" disabled selected>Chart Type</option>
            <option value="bar">Bar Graph</option>
            <option value="line">Line Graph</option>
            <option value="pie">Pie Chart</option>
            <option value="map">Heat Map</option>
          </select>
          {/* <div><button className={styles.f_btn} id={styles.collapse}>Range</button>
            <div className={styles.f_content}>x</div>
            <div className={styles.f_content}>y</div>
          </div> */}
          <select className={styles.f_btn}>
            <option value="" disabled selected>Range</option>
          </select>
          <select className={styles.f_btn}>
            <option>Option 2</option>
          </select>
          <select className={styles.f_btn}>
            <option>Option 3</option>
          </select>
          <select className={styles.f_btn}>
            <option>Option 4</option>
          </select>
          <select className={styles.f_btn}>
            <option>Option 5</option>
          </select>
          <select className={styles.f_btn}>
            <option>Option 6</option>
          </select>
          <select className={styles.f_btn}>
            <option>Option 7</option>
          </select>
          <select className={styles.f_btn}>
            <option>Option 8</option>
          </select>
        </div>
      <div className={styles.main}>
        <h1 className={styles.h1}>Mortality Rate of TAVR from 2013 to 2022</h1>
        <Bar 
          data={data} 
          id={styles.vis}
          height={140}
          width={300}
          />
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