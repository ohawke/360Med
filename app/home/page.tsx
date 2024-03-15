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
import { Map } from '../components';
import { Search } from '../components';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

async function functest(e: any) {
  if (document.getElementById(styles.search)) {
    //let searchedFor = document.getElementById(styles.search).value;
    let temp = await fetch('http://localhost:5050/cpt')
    console.log(temp)
  }
}

/*
async function searchCPT(e: any) {
  if (document.getElementById(styles.search)) {
    let searchedFor = document.getElementById(styles.search).value;
    let temp = await fetch('http://localhost:5050/cpt/search/search?=' + searchedFor)
    console.log(temp)
  }
}
*/

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

  const reset = () => {
    setShowList1(false);
    setShowList2(false);
  };
  const [result, setResult] = useState<string | undefined>();
  const search = () => {
    const lowerCaseSearchContent = searchContent.toLowerCase();
    //const [result, setResult] = useState<string | undefined>();
    pullData(lowerCaseSearchContent).then(data => {
      setResult(data);
    });
    return (
      <div>
        <button onClick={search}>Search</button>
        {result && <div id="result">{result}</div>}
      </div>
    )
  };

  const searchCPT = async () => {
    const lowerCaseSearchContent = searchContent.toLowerCase();
    let temp = fetch('http://localhost:5050/cpt/search?search=' + lowerCaseSearchContent)
      .then((resp) => resp.json())
      .then((data) => {
        setSearchResult(data);
    });

    setSearchContent('');
  }

  return (
    <main className={styles.body}>
      <div className={styles.header}>
        <a className={styles.logo_img} href='/landing-page'>
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
            <option value="mortality">Mortality Rate</option>
            <option value="clinical">Clinical Trials</option>
            <option value="medicine">Medicine</option>
            <option value="map">Heat Map</option>
          </select>
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
        </div>
      <div className={styles.main}>
        {/* <h1 className={styles.h1}>Mortality Rate of TAVR from 2013 to 2022</h1> */}
        {/* <Bar 
          data={data} 
          id={styles.vis}
          height={140}
          width={300}
          /> */}
        <Suspense key={query + currentPage} fallback={<div>loading...</div>}>
          <Map query={query} currentPage={currentPage} />
        </Suspense>
        <div className={styles.list1} style={{display: showList1 ? 'block' : 'none'}}>
        {/* All clinical trial data is pulled from the script provided in the ClinicalTrialsHelper.txt file. Data is manually pulled for the sake of demo*/}
        <h2>Clinical Trials</h2>
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
function cleanData(rawData: string) {
  rawData = rawData.replaceAll("<FieldValue>", "");
  rawData = rawData.replaceAll("</Field>", "");
  rawData = rawData.replaceAll("<FieldList>", "");
  rawData = rawData.replaceAll("</FieldList>", "");
  rawData = rawData.replaceAll("</FieldValue>", "");
  rawData = rawData.replaceAll("</Field>", "");
  rawData = rawData.replaceAll("<StudyFieldsList>", "");
  rawData = rawData.replaceAll("<StudyFields>", "");
  rawData = rawData.replaceAll("<FieldValues>", "");
  rawData = rawData.replaceAll("</FieldValues>", "");
  rawData = rawData.replaceAll("<StudyFields Rank='1'>\n", "");
  //rawData = rawData.replaceAll("<FieldValues Field='BriefTitle">'', "");
  rawData = rawData.replaceAll("<FieldValues Field='Condition'>", "");
  //rawData = rawData.replaceAll("<FieldValues Field='BriefSummary">'', "");
  rawData = rawData.replaceAll("</StudyFieldsList>", "");
  rawData = rawData.replaceAll("</StudyFields>", "");
  rawData = rawData.replaceAll("</StudyFieldsResponse>", "");
  rawData = rawData.replaceAll(":", "");
  return rawData;
}

async function apiRequest(fields: string, input: string) {
  try {
      let url;
      if (fields) {
          url = `https://classic.clinicaltrials.gov/api/query/study_fields?expr=${input}&fields=BriefTitle%2CCondition%2CBriefSummary%2C${fields}&min_rnk=1&max_rnk=10&fmt=xml`;
      } else {
          url = `https://classic.clinicaltrials.gov/api/query/study_fields?expr=${input}&fields=BriefTitle%2CCondition%2CBriefSummary&min_rnk=1&max_rnk=10&fmt=xml`;
      }

      const response = await fetch(url);

      const data = await response.text();

      return data;
  } catch (error) {
      console.log(error);
      return "Invalid request";

  }
}
async function printData(lines: string | any[], fields: any) {

  if (lines.length < 4) {
      console.log("Error: lines array must have at least 4 elements");
      return;
  }

  for (let i = 13; i < lines.length; i++) {
      if (i >= lines.length - 1) {
          break;
      }

      if (lines[i].includes("BriefSummary") || lines[i].includes("BriefTitle") || lines[i].includes(fields)) {

          if (lines[i].includes("BriefTitle")) {
              console.log("Study Title: ");
          } else if (lines[i].includes("BriefSummary")) {
              console.log("Study Summary: ");
          }

          try {

              let output = lines[i + 1];

              if (output.length > 170) {
                  console.log(output.substring(0, 170));
                  let substring = output.substring(170);

                  if (substring.length > 170) {
                      console.log(substring.substring(0, 170));
                      console.log(substring.substring(170) + "\n");
                  } else {
                      console.log(substring + "\n");
                  }
              } else {
                  console.log(lines[i + 1]);
              }

          } catch (error) {
              console.log("Error printing output");
          }
      }
  }
}

  async function pullData(searchTerm: string) {

      searchTerm = searchTerm.replace(/\s/g, '%20');

      const apiData = await apiRequest("", searchTerm);

      const cleanedData = cleanData(apiData);

      return cleanedData;

  }


