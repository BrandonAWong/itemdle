import { useLocation } from 'react-router-dom';
import GuessBox from './GuessBox.jsx';
import Logo from './Logo.jsx';

function HintBox()
{
  return (
    <>
      <div>
        Guess Today's Item
      </div>
    </>
  )
}

function Classic() {
  const location = useLocation();
  const { items } = location.state;

  return (
    <>
      <Logo />
      <HintBox />
      <GuessBox items={items} />
    </>
  )
}

export default Classic;

