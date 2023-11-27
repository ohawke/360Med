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
  let [searchContent, setSearchContent] = useState(''); 
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

  const search = () => {
    const lowerCaseSearchContent = searchContent.toLowerCase();
    if (lowerCaseSearchContent === 'aortic') {
      setShowList1(true);
      setShowList2(false);
    } else if (lowerCaseSearchContent === 'glioblastoma') {
      setShowList1(false);
      setShowList2(true);
    } else {
      setShowList1(false);
      setShowList2(false);
    }

    setSearchContent('');
  };
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
        <div className={styles.list1} style={{display: showList1 ? 'block' : 'none'}}>
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
      {/* Glioblastoma Clinical Trials TO BE IMPLEMENTED */}
        <div className={styles.list2} style={{display: showList2 ? 'block' : 'none'}}>
        <h2>Clinical Trials for Glioblastoma</h2>
        <ul>
          <li>
            <div>
              <h3>  Radiogenomics in Glioblastoma Correlation Between Multiparametric Imaging Biomarkers and Genetic Biomarkers</h3> 
              <p> 
                 The purpose of this study is to evaluate relationships between multiparametric imaging biomarkers and genetic analysis in glioblastoma patients.</p>
              <p> 
              Henan Provincial People's Hospital
              </p>
            </div>
          </li>
        </ul>
        <ul>
          <li>
            <div>
              <h3>   Feasibility Study of 68Ga-PSMA PET-CT and 18F-FDOPA PET-CT in Glioblastoma's Patients</h3> 
              <p>  
              This study is a non-randomized, prospective, multicentric feasibility study assessing 68Ga-PSMA PET-CT and 18F-FDOPA PET-CT to differentiate early recurrence from
 post-radiation modifications in patients treated with radiotherapy for glioblastoma.

Patients with a MRI performed since the end of the radiotherapy until 12 months of follow up after the end of radiotherapy, will be referred for both 68Ga-PSMA and 18F-FD
OPA PET-CT, whatever the conclusion of the MRI (post radiation modifications, relapse or doubtful MRI).

The rationale of doing 68Ga-PSMA and 18F-FDOPA brain PET-CT in each case will be discussed in detail with the referring physician and an informed consent will be taken fr
om each patient for the study. The two imaging studies will be done at least with a gap of 6 hours, using the same PET-CT scanner.
              </p>
              <p>
              Centre Leon Berard BRON Cedex Lyon, France
              </p>
            </div>
          </li>
        </ul>
        <ul>
          <li>
            <div>
              <h3>    Improving Understanding of Glioblastoma Through Preservation of Biologically Active Brain Tissue</h3> 
              <p>  
               To collect and preserve glioblastoma tissue during standard of care tumor resection surgery and blood for future molecular and genetic testing. Tissue for researc
h will be collected from three different regions within the same tumor to study how these regions differ in their structure, DNA, and RNA and also to compare the data obt
ained from this testing to imaging data found in the medical record. The goal of this study is to help us better understand what the glioblastoma tumor tissue looks like and how it functions. This understanding can lead to new therapies for the treatment of glioblastoma in the future.
              </p>
              <p>
               Baptist Health South Florida 
               Miami, Florida
              </p>
            </div>
          </li>
        </ul>
        <ul>
          <li>
            <div>
              <h3> Collection of Blood and Urine Samples in Patients Receiving Radiation Therapy for Glioblastoma Multiforme</h3> 
              <p>  
                 This study will collect blood and urine samples from patients undergoing radiation therapy for glioblastoma multiforme (a type of brain tumor) to investigate the 
effects of this treatment on blood cells and certain proteins. The information from this study may help scientists develop new tests to measure radiation exposure and fin
d new ways to treat cancer with radiation, and help determine which kinds of patients or tumors respond better to radiation therapy. Two proteins of particular interest in this study and which may be involved in the recurrence of cancer are VEGF (vascular endothelial growth factor) and MMPs (matrix metalloproteinases).

Patients 18 years of age and older with glioblastoma multiforme who are receiving or will receive radiation therapy as part of their medical treatment may be eligible for
 this study. Candidates are screened with a history and physical examination, blood tests, and magnetic resonance imaging (MRI) of the brain.

Participants will have blood and urine samples collected before, during and after completion of their radiation treatment. Urine samples are collected in a cup and about 
2 tablespoons of blood are withdrawn through a needle in a vein. Additional samples may be requested at different times during treatment and in the 3-year follow-up perio
d.
              </p>
              <p>
        National Cancer Institute (NCI) Bethesda, United States
              </p>
            </div>
          </li>
        </ul>
        <ul>
          <li>
            <div>
              <h3> Spectral Analysis Probe to Identify Glioblastoma Cells</h3> 
              <p>  
              This is a pilot, observational study to evaluate the intraoperative sensitivity of the Chaos Wand in detecting tumor tissue with glioblastoma disease.
              </p>
              <p>
              University of Oklahoma
              Oklahoma City, United States
              </p>
            </div>
          </li>
        </ul>
        <ul>
          <li>
            <div>
              <h3> Intraoperative Photodynamic Therapy of Glioblastoma</h3> 
              <p>  
               The study pilot evaluate the feasibility of a &quot;5-ALA- PpIX (protoporhyrin IX) mediated per-PDT protocol&quot; in patients with glioblastoma accessible for co
mplete surgical removal of contrast. This treatment will be carried out in addition to the current reference treatment of glioblastoma maximum resection surgery followed 
by radiochemotherapy according to the protocol Stupp
              </p>
              <p>
               University Hospital, Lille, France
              </p>
            </div>
          </li>
        </ul>
        <ul>
          <li>
            <div>
              <h3> TRC105 for Recurrent Glioblastoma</h3> 
              <p>  
              Glioblastoma is an aggressive type of brain cancer that often resists treatment. TRC105 is an experimental drug that blocks the growth of new blood vessels. It is being
 studied for possible use in treating different kinds of cancer. Researchers want to see if TRC105 can be used to treat glioblastoma that has not responded to standard tr
eatments.

Objectives

- To test the safety and effectiveness of TRC105 in adults who have glioblastoma that has not responded to standard treatments.

Eligibility

- Individuals at least 18 years of age who have glioblastoma that has not responded to standard treatments.

Design

Participants will be screened with a physical exam and medical history. Blood and urine samples will be collected. Imaging studies and other tests will be used to study t
he tumor before the start of treatment.
Participants will have 28-day (4-week) cycles of treatment.
Participants will have TRC105 intravenously once a week. The first infusion will take about 4 hours. The length of time needed for the infusion may be slowly reduced if i
t is well tolerated.
At the end of the first cycle (the first 4 weeks), the imaging studies will be repeated before continuing TRC105.
Participants will take TRC105 for as long as the tumor does not grow and the side effects are not too severe. They will have imaging studies at the end of every cycle to 
evaluate the tumor.

              </p>
            </div>
          </li>
        </ul>
        <ul>
          <li>
            <div>
              <h3>Accurate DCE-MRI Measurement of Glioblastoma Using Point-of-care Portable Perfusion Phantom</h3> 
              <p>  
              The goal of this study is to test whether a new device developed at the University of Alabama at Birmingham (UAB) can decrease the error in calculating blood flow
 of a brain tumor, leading to better prognosis. UAB radiological research team has been studying a cutting-edge imaging technique named dynamic contrast enhanced (DCE) ma
gnetic resonance imaging (MRI) , or DCE-MRI, over 10 years. This technique has been globally used to calculate blood flow of various tissues including tumors. Blood flow often serves as a critical indicator showing a disease status. For example, a brain tumor has typically high blood flow, so the magnitude of blood flow can be used as an indicator to identify the presence and aggressiveness of a brain tumor. In addition, an effective therapy can result in the alteration of the blood flow in a brain tumor. Therefore, the investigators may be able to determine whether the undergoing therapy is effective or not by measuring the blood flow in the brain tumor, and decide whether they need to continue the therapy or try a different one.

However, unfortunately, the measurement of blood flow using DCE-MRI is often inaccurate. MRI scanners may use different hardware and software thus the measurement may be 
different across scanners. The measurement may also be different over time due to hardware instability. Therefore, the investigators propose to use an artificial tissue, 
named &quot;phantom&quot;, together with a patient. The phantom has a constant blood flow thus it can serve as a standard. Errors, if it occurs, will affect the images of both the patient and the phantom. Therefore, the investigators will be able to correct the errors in the patient image using the phantom image. UAB radiological research team invented a new device for this purpose named point-of-care portable perfusion phantom, or shortly P4. The team recently demonstrated the utility of the P4 phantom for accurate measurement of blood flow in pancreatic cancer and prostate cancer. In this study, they will test whether the P4 phantom will improve the measurement accuracy in brain cancer.
              </p>
            </div>
          </li>
        </ul>
        <ul>
          <li>
            <div>
              <h3> Prognosis and Therapeutic Biomarkers for Glioblastoma Patients</h3> 
              <p>  
              The purpose of this study is to investigate if the potential biomarkers identified could be used for facilitating the diagnosis and prognosis of patients with gli
oblastoma (GBM).
              </p>
              <p>
               Baylor Research Institute
              Temple, United States
              </p>
            </div>
          </li>
        </ul>
        <ul>
          <li>
            <div>
              <h3>  Study of Niacin in Glioblastoma</h3> 
              <p>  
              This is a single institution Phase I-II study to evaluate the tolerability and Maximum Tolerated Dose (MTD) (Phase I) and efficacy (Phase II) of adding Niacin CRT
™ to standard first line treatment (concurrent Radiation Therapy (RT) and Temozolomide (TMZ) following by monthly TMZ - AKA Stupp protocol) in patients with newly diagnos
ed glioblastoma isocitrate dehydrogenase (IDH) wild type.
              </p>
              <p>
              AHS Cancer Control Alberta 
              Calgary, Canada
              </p>
            </div>
          </li>
        </ul>
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
