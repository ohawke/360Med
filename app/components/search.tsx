'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import React, { useState } from "react";
import styles from '../home/page.module.css';
import {useCombobox} from 'downshift';


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
  

  function DropdownCombobox() {
    const [inputItems, setInputItems] = useState([])
    const [input, setInput] = useState('');

    const handleSuggest = useDebouncedCallback((term: string) => {
      fetch('http://localhost:5050/cpt/suggest?search=' + term.toLowerCase())
        .then((resp) => resp.json())
        .then((data) => setInputItems(data));
    }, 300);
    
    const {
      isOpen,
      getToggleButtonProps,
      getLabelProps,
      getMenuProps,
      getInputProps,
      highlightedIndex,
      getItemProps,
    } = useCombobox({
      items: inputItems,
      onInputValueChange: async ({inputValue}) => {
        setInput(inputValue);
        let result = handleSuggest(inputValue);
      },
      onSelectedItemChange({ selectedItem }) {
        handleSearch(selectedItem);
      },
    })
    return (
      <div>
        <div>
          <input {...getInputProps()} />
          <button
            type="button"
            {...getToggleButtonProps()}
          >
          <div id={styles.search_icn}>&#9906;</div>
          </button>
        </div>
        <ul {...getMenuProps()}>
          {isOpen &&
            inputItems.map((item, index) => (
              <li
                style={
                  highlightedIndex === index ? {backgroundColor: '#bde4ff'} : {}
                }
                key={`${item}${index}`}
                {...getItemProps({item, index})}
              >
                {item}
              </li>
            ))}
        </ul>
      </div>
    )
  }
  

  return (
    <div className={styles.search}>
      <DropdownCombobox  />
    </div>
  );
}