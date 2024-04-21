'use client';
import { useState, FormEvent } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import styles from '../home/page.module.css';

export default function Search({ placeholder }: { placeholder: string }) {
  const [inputValue, setInputValue] = useState('');
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
      e.preventDefault(); // Prevent the form from submitting and reloading the page
      handleSearch(inputValue);
  };

  const handleButtonClick = () => {
    handleSearch(inputValue);
  };

  return (
    <form className={styles.search} onSubmit={handleSubmit}>
      <input 
        id={styles.search}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
      />
      <button className={styles.searchButton} onClick={handleButtonClick}>
            <img src="/search-icon.png" alt="Search" />
      </button>
    </form>
  );
}