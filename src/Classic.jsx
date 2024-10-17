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

function GuessBox()
{
  return (
    <>
      <input placeholder="Type an item name..."></input>
    </>
  )
}

function Classic() {
  return (
    <>
      <HintBox />
      <GuessBox />
    </>
  )
}

export default Classic

