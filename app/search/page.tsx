import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image'
import styles from './search-page.module.css'; // make sure to create this CSS module

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
          <h1 className={styles.title}>Welcome, <span className={styles.understandable}>User</span></h1>
        </div>
        <div className={styles.searchContainer}>
          <input type="text" placeholder="Heart Disease Death Rate" className={styles.searchInput}/>
          <button className={styles.searchButton}>
            <img src="/search-icon.png" alt="Search" />
          </button>
        </div>
      </main>

      <footer className={styles.footer}>
        <a>About</a>
        <a>Team</a>
      </footer>
    </div>
  );
}