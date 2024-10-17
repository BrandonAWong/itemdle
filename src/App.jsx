import { useState } from 'react'
import Logo from './Logo.jsx'
import './App.css'

function App() {
  return (
    <>
      <Logo />
      <div>
        <a href="classic"><button>Classic</button></a>
        <a><button>Passive</button></a>
        <a><button>Active</button></a>
        <a><button>Icon</button></a>
      </div>
    </>
  )
}

export default App;
