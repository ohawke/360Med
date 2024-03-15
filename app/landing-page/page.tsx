import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image'
import styles from './landing-page.module.css'; // make sure to create this CSS module

export default function LandingPage() {
  return (
    <div className={styles.page}>
      <Head>
        <title>360Med</title>
        <meta name="description" content="Unlocking medical data through visualization" />
      </Head>
      
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.logo}>360Med</div>
          <a className={styles.logo_img}>
          <Image
            src="/logo.png" 
            alt="360Med"
            id={styles.logo_img} 
            width={120}
            height={40}
          ></Image>
        </a>
        </nav>
      </header>

      <main className={styles.main}>
        <div className={styles.titleBlock}>
          <h1 className={styles.title}>Medical Datasets Made <span className={styles.understandable}>understandable</span>.</h1>
          <p className={styles.subtitle}>Take the first step towards unlocking the vast world of medical knowledge. We make searching through medical data simple and stress-free by replacing tables of data into straightforward visualizations.</p>
          <p> _</p>
          <Link href="/home" className={styles.startButton}>Start Now</Link>
        </div>
        <div className={styles.graphBlock}>
        <img
            src="/graph_example.png" 
            alt="Graph"
            className={styles.graphImage}/>
        </div>
      </main>

      <footer className={styles.footer}>
        <a>About</a>
        <a>Team</a>
      </footer>
    </div>
  );
}