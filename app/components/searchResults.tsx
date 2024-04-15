import React, { useState, useEffect } from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export default function SearchResult ({
    query,
    currentPage,
  }: {
    query: string;
    currentPage: number;
  }) {
    let [items, setItems] = useState([]);
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();  

    const handleSearch = (term: string) => {
      const params = new URLSearchParams(searchParams);
      if (term) {
        params.set('query', term);
      } else {
        params.delete('query');
      }
      replace(`${pathname}?${params.toString()}`);
    };

    const getItems = async (term: string) => {
      try {
        let temp = fetch('http://localhost:5050/cpt/suggest?search=' + term)
        .then((resp) => resp.json())
        .then((data) => {
          setItems(data);
        });
      } catch {
        alert("failed to fetch");
      }
    }
    
    useEffect(() => {
      if (query == '') {
        return;
      }
      const lowerCaseSearchContent = query.toLowerCase();
      getItems(lowerCaseSearchContent);
      console.log("hit");
    }, [query]);
    return (
        <div id = "result">
        <ul>
            {items.map((result: any) => (
            <li key={result.ui} onClick = {(e) => {handleSearch((e.target as HTMLLIElement).innerText);
              document.getElementById("result").classList.add('hidden');
            }}>{result.name}</li>
            ))}
        </ul>
        </div>
    )
}