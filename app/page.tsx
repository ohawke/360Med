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

async function functest(e: any) {
  if (document.getElementById(styles.search)) {
    let searchedFor = document.getElementById(styles.search).value;
    let temp = await fetch('http://localhost:5050/cpt')
    console.log(temp)
  }
}

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
          <button id={styles.search_btn} onClick={(e) => functest(e)}><div id={styles.search_icn}>&#9906;</div></button>
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
        <div className={styles.list}>
        {/* All clinical trial data is pulled from the script provided in the ClinicalTrialsHelper.txt file. Data is manually pulled for the sake of demo*/}
        <h2>Clinical Trials</h2>
        <ol>
          <li>
            <div>
              <h3> Outcomes of Surgery of Aortic Valve</h3> 
              <p> 
                Overall Goal To study the outcomes of patients undergoing aortic valve surgeries, different approaches such as standard aortic valve replacement, aortic valve repair, novel techniques as Ozaki's procedure and their subsequent results and complications.
Objective 1 Identify predictors of complications following different types of aortic valve surgery accordingly.
Objective 2 Determine the value of each type in terms of advantages and disadvantages.
Objective3 Assess outcomes such as postoperative life expectancy, hospital stay, prognosis and quality of life.</p>
              <p> 
              Assiut University
              </p>
            </div>
          </li>
        </ol>
        <ol>
          <li>
            <div>
              <h3>  Microembolic Signals and Cerebrospinal Fluid Markers of Neuronal Damage After Surgical Aortic Valve Replacement</h3> 
              <p>  
                The use of MRI have shown that the incidence of postoperative cerebral lesions due to cerebral embolization is high (1). Nonetheless the extent of postoperative n
eurological dysfunction is only a fraction of the actual amount of new postoperative changes detected on MRI. Transcranial Doppler (TCD) has shown the occurrence of exten
sive microembolic signals in intracerebral arteries during open heart procedures (2). The clinical significance of cerebral microemboli is not clear (3-5). The use of serological markers to assess cerebral injury after open cardiac surgery is difficult to interpret. The levels of markers seems to be contaminated from extracerebral sources (6). In order assess the release of markers of neuronal damage after open aortic valve surgery the investigators intend to examine the levels of S-100B, NSE and Tau in cerebrospinal fluid (CSF) by comparing the levels preoperative with the levels one day after surgery. Furthermore the investigators will determine the total amount of cerebral microembolic signals during the surgical procedure by means of TCD. The investigators will statistically test if there is any correlation between the increase in cerebrospinal fluid levels of S-100B,NSE and Tau and the cerebral embolic load.
              </p>
              <p>
              Sahlgrenska University Hospital, Sweden
              </p>
            </div>
          </li>
        </ol>
        <ol>
          <li>
            <div>
              <h3>  Long-Term Follow-up After the Autograft Aortic Valve Procedure (Ross Operation)</h3> 
              <p>  
              With the current knowledge of aortic valve replacement modalities, no specific recommendations can be given and the decision for a particular prosthesis or proced
ure is rather arbitrarily. The investigators hypothesize that the autograft procedure according to Ross is superior in terms of hemodynamic (especially regression of left
 ventricular hypertrophy) and major adverse valve related events even in a long-term course
              </p>
              <p>
              University of Luebeck
              </p>
            </div>
          </li>
        </ol>
        <ol>
          <li>
            <div>
              <h3>   Early Aortic valve surgery Versus watchful waiting Strategy in Severe Asymptomatic aortic regurgitation</h3> 
              <p>  
              The optimal timing of surgical intervention in asymptomatic patients with severe aortic regurgitation remains controversial. As per cardiac magnetic resonance ass
essment, early surgical treatment will be compared with conventional guideline-based strategy in asymptomatic patients with severe aortic regurgitation.
      

        radka.kockova@centrum.cz
        jan.vojacek1@fnhk.cz
      

        Radka Kočková, MD,PhD
        Jan Vojáček, MD, PhD
      

        +420606483586
        +420777095921

              </p>
              <p>
              Na Homolce Hospital
              </p>
            </div>
          </li>
        </ol>
        <ol>
          <li>
            <div>
              <h3>   Cognitive Outcome After Surgical and Transcatheter Aortic Valve Replacement</h3> 
              <p>  
              Aortic valve stenosis is one of the most common types of heart disease in the aging Western population. While surgical cardiac valve replacement (SAVR) is a stand
ard therapy for patients with aortic stenosis, catheter-assisted aortic valve implantation (TAVI) has developed as an alternative to open-heart surgery, especially for hi
gh-risk patients. Recently, increased surgeon experience and improved transcatheter valve systems have led to a global trend to use TAVI in patients with low or intermediate risk. Although cognitive impairment after cardiac surgery is well known, the effect of TAVI on cognitive function has not yet been adequately investigated. The aim of this study is to compare the occurrence and progression of delirium, postoperative cognitive decline (POCD), cerebral infarction, and health-related quality of life (QOL) in patients with intermediate risk for catheter-assisted (TAVI) and surgical (SAVR) aortic valve replacement.
              </p>
              <p>
              Heart and Brain Research Group, Germany
              </p>
            </div>
          </li>
        </ol>
        <ol>
          <li>
            <div>
              <h3>   Use of Transvenous Pacing Wire During Minimally Invasive Port Access Aortic Valve Surgery</h3> 
              <p>  
              The study is being done to determine if the Endovent pulmonary catheter kit, used for port access surgery, can be used as a passageway for a pacing wire. The stud
y hypothesis is that the Endovent kit can be used effectively as a passageway for a pacing wire system.
              </p>
              <p>
              Rutgers, The State University of New Jersey
              </p>
            </div>
          </li>
        </ol>
        <ol>
          <li>
            <div>
              <h3> A Prospective Multicenter Pivotal Study to Evaluate Safety and Effectiveness of Venus-Neo Surgical Aortic Valve</h3> 
              <p>  
              The goal of this clinical trial is to evaluate the safety, effectiveness, and performance of Venus-Neo Surgical Aortic Valve in subjects who are clinically indica
ted for aortic valve replacement.
              </p>
            </div>
          </li>
        </ol>
        <ol>
          <li>
            <div>
              <h3> Comparison of Transcatheter Versus Surgical Aortic Valve Replacement in Younger Low Surgical Risk Patients With Severe Aortic Stenosis</h3> 
              <p>  
              A randomized clinical trial investigating transcatheter (TAVR) versus surgical (SAVR) aortic valve replacement in patients 75 years of age or younger suffering fr
om severe aortic valve stenosis.
Study hypothesis The clinical outcome (composite endpoint of all-cause mortality, MI and stroke) obtained within 1 year after TAVR is non-inferior to SAVR.
              </p>
            </div>
          </li>
        </ol>
        <ol>
          <li>
            <div>
              <h3> Acute Lung Injury After Aortic Valve Surgery</h3> 
              <p>  
              The purpose of this prospective, randomized clinical trial is to understand and measure lung injuries caused by CPB in aortic valve surgery.

Study questions

Is there any correlation between the release of pro-inflammatory biomarkers and lung injury degree?
Is there any correlation between oxyhaemodynamic parameters and lung injury degree?
Is there any correlation between oxyhaemodynamic parameters and the release of pro-inflammatory biomarkers?
Are budesonide, erdostein and acetylcystein effective in the prevention of lung injuries?

              </p>
              <p>
              University of Oulu
              </p>
            </div>
          </li>
        </ol>
        <ol>
          <li>
            <div>
              <h3>  Early Surgery for Patients With Asymptomatic Aortic Stenosis</h3> 
              <p>  
              Many cardiologists are convinced that early surgery in asymptomatic aortic stenosis (AS) saves lives. However there is currently no direct evidence for this and m
ost recommendations from the ESC/ EACTS or ACC/ AHA in this field are supported by Level-B or C evidence. Therefore, the investigators designed a randomized controlled tr
ial to demonstrate whether early surgery improves mortality and morbidity of patients with asymptomatic severe AS and low operative risk.
              </p>
              <p>
              Assistance Publique - Hôpitaux de Paris
              </p>
            </div>
          </li>
        </ol>
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
