import { useState, useRef, useEffect } from 'react';
import './GuessBox.css';

function GuessBox({ items }) {
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
    items.splice(items.indexOf(item), 1);
    setFilter('');
    // TODO: Callback to parent
  };

  const handleClickOutside = (e) => {
    if(wrappedRef.current && !wrappedRef.current.contains(e.target)) {
      setShowSuggestions(false);
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, []);

  return ( 
    <>
      <div ref={wrappedRef}>
        <input
          placeholder="Type an item name..."
          onChange={handleOnChange}
          onKeyDown={checkEnterPressed}
          onFocus={() => setShowSuggestions(true)}
          value={filter}
        />
        {showSuggestions &&
          <ul>
            {getItemsByFilter().map((item, index) => (
              <li
                key={index}
                onClick={() => submitGuess(item)}
              >
                <div>
                  <img src={item.image} />
                  {item.name}
                </div>
              </li>
            ))}
          </ul>
        }
      </div>
    </>
  );
}

export default GuessBox;

