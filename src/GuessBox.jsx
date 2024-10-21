import { useState, useRef, useEffect } from 'react';
import styles from './GuessBox.module.css';

function GuessBox({ items, handleGuess, showIcons=true }) {
  const [filter, setFilter] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const wrappedRef = useRef(null);

  const getItemsByFilter = () => {
    if (!filter) {
      return [];
    }

    return items.filter(item => item.name.toLowerCase().replace(/\W/g, '')
      .startsWith(filter.toLowerCase().replace(/\W/g, '')));
  };

  const handleClickOutside = (e) => {
    if(wrappedRef.current && !wrappedRef.current.contains(e.target)) {
      setShowSuggestions(false);
    }
  }

  const handleOnChange = (e) => {
    setFilter(e.target.value);
    setShowSuggestions(true);
  };

  const checkEnterPressed = (e) => {
    const filteredItems = getItemsByFilter();
    if (filteredItems.length > 0 && e.key === 'Enter') {
      submitGuess(filteredItems[0]);
    }
  };

  const submitGuess = (item) => {
    handleGuess(item);
    items.splice(items.indexOf(item), 1);
    setFilter('');
  };

  useEffect(() => {
    console.log(styles);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, []);

  return (
    <div ref={wrappedRef}>
      <div
        className={styles.inputContainer}
      >
        <input
          className={styles.inputBox}
          placeholder='Type an item name...'
          onChange={handleOnChange}
          onKeyDown={checkEnterPressed}
          onFocus={() => setShowSuggestions(true)}
          value={filter}
        />
      </div>
      {showSuggestions &&
        <ul
          className={styles.itemList}
        >
          {getItemsByFilter().map((item, index) => (
            <li
              className={styles.item}
              key={index}
              onClick={() => submitGuess(item)}
            >
              <div>
                {showIcons && 
                  <img 
                    className={styles.itemImg}
                    src={item.image} 
                  />
                }
                {item.name}
              </div>
            </li>
          ))}
        </ul>
      }
    </div>
  );
}

export default GuessBox;

