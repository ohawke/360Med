'use client';
import { useState } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';  // Correct imports based on your use case
import { useDebouncedCallback } from 'use-debounce'; // Ensure you have this package if using useDebouncedCallback
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

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent the form from submitting and reloading the page
      handleSearch(inputValue);
    }
  };

  const handleButtonClick = () => {
    handleSearch(inputValue);
  };

  return (
    <div className={styles.search}>
      <input 
        id={styles.search}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <button id={styles.button} onClick={handleButtonClick}>
        <div id={styles.search_icn}>&#9906;</div>
      </button>
    </div>
  );
}