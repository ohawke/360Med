import React, { useState, useEffect } from 'react';

export default async function SearchResult ({
    query,
    currentPage,
  }: {
    query: string;
    currentPage: number;
  }) {
    let [items, setItems] = useState([]);
    
    useEffect(() => {
      if (query == '') {
        return;
      }
      const lowerCaseSearchContent = query.toLowerCase();
      try {
        let temp = fetch('http://localhost:5050/cpt/suggest?search=' + lowerCaseSearchContent)
        .then((resp) => resp.json())
        .then((data) => {
          setItems(data);
        });
      } catch {
        alert("failed to fetch");
      }
      console.log(items);
    }, []);
    return (
        <div>
        <ul>
            {items.map((result: any) => (
            <li key={result.ui}>{result.name}</li>
            ))}
        </ul>
        </div>
    )
}