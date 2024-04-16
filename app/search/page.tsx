"use client";
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image'
import styles from './search-page.module.css'; 
import React, { useState, FormEvent} from 'react';
import { useSearchParams, useRouter, usePathname} from 'next/navigation';

export default function LandingPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { push } = useRouter();

  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearchTerm(e.target.value);
  // };

  // const handleSubmit = (e: FormEvent) => {
  //   e.preventDefault(); // Prevent the default form submission behavior
  //   handleSearch(searchTerm);
  // };

  // function handleSearch(term: string) {
  //   const params = new URLSearchParams(searchParams);
  //   if (term) {
  //     params.set('query', term);
  //   } else {
  //     params.delete('query');
  //   }
  //   replace(`/home?${params.toString()}`);
  // }

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // Redirect to the original page with the search term in the query parameter.
  //   push(`/home?query=${encodeURIComponent(searchTerm)}`);
  // };

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
        {/* <form className={styles.searchContainer} onSubmit={handleSubmit}>
          <input type="text" placeholder="Heart Disease Death Rate" className={styles.searchInput} onChange={(e) => {handleInputChange}} defaultValue={searchParams.get('query')?.toString()}/>
          <button className={styles.searchButton}>
            <img src="/search-icon.png" alt="Search" />
          </button>
        </form> */}
      </main>

      <footer className={styles.footer}>
        <a>About</a>
        <a>Team</a>
      </footer>
    </div>
  );
}