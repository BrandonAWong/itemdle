import { useState } from 'react';
import { Link } from 'react-router-dom';
import Item from './Item.js';
import Logo from './Logo.jsx';
import itemsJSON from './data/items.json';
import './App.css';

function App() {
  const [items, setItems] = useState(itemsJSON.map(item => Object.assign(new Item(), item)));

  return (
    <>
      <Logo />
      <div>
        <Link to="/classic" state={{items}}>
          <button>Classic</button>
        </Link>
        <a><button>Passive</button></a>
        <a><button>Active</button></a>
        <a><button>Icon</button></a>
      </div>
    </>
  )
}

export default App;
