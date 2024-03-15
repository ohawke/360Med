'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import styles from '../home/page.module.css';


export default function Search({ placeholder }: { placeholder: string }) {
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

  return (
    <div className={styles.search}>
      <input
        id={styles.search} 
        placeholder={placeholder}
        defaultValue={searchParams.get('query')?.toString()}
      />
      <button id={styles.search_btn} onClick={() => {
        var q = document.getElementById(styles.search).value;
        if (q == null) {
          alert("Please enter search query")
        }
        handleSearch(q);
      }}><div id={styles.search_icn}>&#9906;</div></button>
    </div>
  );
}