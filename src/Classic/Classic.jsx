import { useState, useEffect } from 'react';
import HintBox from './HintBox.jsx'
import StatsContainer from './StatsContainer.jsx';
import GuessBox from '../GuessBox.jsx';
import Logo from '../Logo.jsx';
import Item from '../Item.js';
import itemsJSON from '../data/items.json';


function Classic() {
  const [items, setItems] = useState(itemsJSON.map(item => Object.assign(new Item(), item)));
  const [itemToGuess] = useState(items[Math.floor(Math.random() * items.length)]);
  const [guesses, setGuesses] = useState([]);
  const [finished, setFinished] = useState(false);

  const handleGuess = (item) => {
    setGuesses([...guesses, item])
  }

  useEffect(() => {
    // display boxes
    if (itemToGuess === guesses[guesses.length - 1]) {
      setFinished(true);
    }

    return () => {
      console.log("use effect cleanup");
    }
  });

  return (
    <>
      <Logo />
      <HintBox />
      {!finished &&
        <GuessBox
          items={items}
          handleGuess={handleGuess}
        />
      }
      {guesses.length > 0 &&
        <div>
          <ul>
            {guesses.map((item, index) => (
              <li
                key={index}
              >
                <StatsContainer
                  item={item}
                />
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      }
    </>
  )
}

export default Classic;

