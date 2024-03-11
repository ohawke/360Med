import Head from 'next/head';
import Link from 'next/link';
import styles from './landing-page.module.css'; // make sure to create this CSS module

export default function LandingPage() {
  return (
    <div>
      <Head>
        <title>MedConnect</title>
        <meta name="description" content="Unlocking medical data through visualization" />
      </Head>
      
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.logo}>MEDCONNECT</div>
          <div className={styles.loginButton}>Login</div>
        </nav>
      </header>

      <main className={styles.main}>
        <div className={styles.titleBlock}>
          <h1 className={styles.title}>MEDICAL DATASET MADE <span className={styles.understandable}>understandable</span></h1>
          <p className={styles.subtitle}>Take the first step towards unlocking the vast world of medical knowledge. We make searching through medical data simple and stress-free by replacing tables of data into straightforward visualizations.</p>
          <a className={styles.startButton}>Start Now</a>
        </div>
        <div className={styles.graphBlock}>
          {/* Placeholder for graph or image */}
        </div>
      </main>

      <footer className={styles.footer}>
        <a>About</a>
        <a>Team</a>
      </footer>
    </div>
  );
}