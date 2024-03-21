
import React,{ useState } from 'react';
import './App.css';
import RandomQuote from './Components/RandomQuote/RandomQuote'
import xlogo
import tumblrlogo

function App() {
  const [quote,setQuote]=useState({
    text:"",
    author:""
  })
  return (
    <div className='container'>
      <div className='quote'>{quote.text}</div>
      <div className='line'></div>
      <div className='bottom'>
        <div className='author'>{quote.author}</div>
        <div className='icons'>
          <img src={xlogo} alt="twitter-logo"/>
          <img src={tumblrlogo} alt='' />

          
        </div>
      </div>
    </div>
    
  );
}

export default App;
