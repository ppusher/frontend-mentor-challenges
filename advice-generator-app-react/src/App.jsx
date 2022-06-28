import { useState, useEffect } from 'react';

import { QuoteWrapper, QuoteTitle, QuoteText,
  Button, QuoteImage, CircleLoader } from "./App.styles";

function App() {

  const [isLoading, setisLoading] = useState(false);
  const [newQuote, setNewQuote] = useState();

  function fetchAdvice() {
    setisLoading(true)
    setNewQuote()
    const uri = "https://api.adviceslip.com/advice";    
   fetch(uri)
      .then((r) => { if (r.ok)  return r.json()
      throw new Error(`Network response ${r.status}`)
      })
      .then((data)=>setNewQuote(data));
      setisLoading(false)
  }

  useEffect(() => {
    fetchAdvice()
  }, [])
  
  return (

    <QuoteWrapper>
    {newQuote && !isLoading ? 
      <>
        <QuoteTitle>
          Advice #{newQuote.slip.id}
        </QuoteTitle>
        <QuoteText>
          "{newQuote.slip.advice}"
        </QuoteText>
        <QuoteImage/>
      </>
        :  
      <CircleLoader /> }

  <Button onClick = {()=>fetchAdvice()}><img src="./images/icon-dice.svg"></img></Button>
    </QuoteWrapper>

  )
}

export default App
