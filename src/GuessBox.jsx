import { useState } from 'react';
import './GuessBox.css';

function GuessBox({ items }) {
  const [filter, setFilter] = useState('');

  const getItemsByFilter = () => {
    if (!filter) {
      return [];
    }

    return items.filter(item => item.name.toLowerCase().replace(/\W/g, '')
      .startsWith(filter.toLowerCase().replace(/\W/g, '')));
  }

  const checkEnterPressed = (e) => {
    const filteredItems = getItemsByFilter();
    if (filteredItems.length > 0 && e.key === 'Enter') {
      submitGuess(filteredItems[0]);
    }
  }

  const submitGuess = (item) => {
    items.splice(items.indexOf(item), 1);
    setFilter('');
  }

  return ( <>
      <div>
        <input
          placeholder="Type an item name..."
          onChange={(e) => setFilter(e.target.value)}
          onKeyDown={checkEnterPressed}
          value={filter}
        />
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
      </div>
    </>
  );
}

export default GuessBox;

