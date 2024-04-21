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
import { useEffect, useState, Suspense } from 'react';
import { Bar } from 'react-chartjs-2';
import { Map, Search, SearchResult } from '../components';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


export default function Home({
    searchParams,
  }: {
    searchParams?: {
      query?: string;
      page?: string;
    };
  }) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  let [searchContent, setSearchContent] = useState(''); 
  let [searchResult, setSearchResult] = useState('');
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
  const [showList1, setShowList1] = useState(false);
  const [showList2, setShowList2] = useState(false);
  const [showMap, setShowMap] = useState(false);

  const handleSelect = () => {
    let select = (document.getElementsByName("chart_type")[0] as HTMLSelectElement).selectedIndex;
    if (select == 4) {
      setShowMap(true);
    }
  }

  return (
    <main className={styles.body}>
      <div className={styles.header}>
        <a className={styles.logo_img} href='/search'>
          <Image
            src="/logo.png" 
            alt="360Med"
            id={styles.logo_img} 
            width={110}
            height={40}
          ></Image>
        </a>
        <div className={styles.search}>
          <Search placeholder='Search...'/>
        </div>
        <a className={styles.account} href="login.html">
          <button id={styles.account} className={styles.hoverEffect}>Logout</button>
        </a>
      </div>
      <br></br>
      <div className={styles.filter}>
          <div className={styles.f_btn} id={styles.f_label}>Filter</div>
          <select className={styles.f_btn} name="data_type">
            <option value="" disabled selected>Data Type</option>
            <option value="mortality">CPT Code</option>
            <option value="clinical">Clinical Trials</option>
          </select>
          <select className={styles.f_btn} name="chart_type" onChange={handleSelect}>
            <option value="" disabled selected>Chart Type</option>
            <option value="map">Heat Map</option>
          </select>
          {/* <div><button className={styles.f_btn} id={styles.collapse}>Range</button>
            <div className={styles.f_content}>x</div>
            <div className={styles.f_content}>y</div>
          </div> */}
          <select className={styles.f_btn}>
            <option value="" disabled selected>Range</option>
          </select>
        </div>
      <div className={styles.main}>
        {<SearchResult query={query} currentPage={currentPage}/>}
        <div style={{display: showMap ? 'block' : 'none'}}>
        <Suspense key={query + currentPage} fallback={<div>loading...</div>}>
          <Map query={query} currentPage={currentPage} />
        </Suspense>
        </div>
        <div className={styles.list1} style={{display: showList1 ? 'block' : 'none'}}>
      </div>
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


