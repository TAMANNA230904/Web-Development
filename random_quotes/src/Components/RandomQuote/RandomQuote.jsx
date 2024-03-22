import React,{useState} from "react";
import './RandomQuote.css'


const RandomQuote=()=>{
let quotes=[];
async function loadQuotes(){
  const response=await fetch("https://type.fit/api/quotes")
  quotes=await response.json()
}




    const [quote,setQuote]=useState({
        text:"Preach what You Teach",
        author:"Tamannna Sheikh"
      })


      const random=()=>{
         const select=quotes[Math.floor(Math.random()*quotes.length)]
         setQuote(select);
      }  

      const twitter=()=>{
        window.open(`https://twitter.com/?text=${quote.text} -${quote.author.split(',')[0]}`)
      }



      loadQuotes();
      return (
        <div className='container'>
          <div className='quote'>{quote.text}</div>
          <div className='line'></div>
          <div className='bottom'>
            <div className='author'>-{quote.author.split(',')[0]}</div>
            <div className='icons'>
              <img src=
              'https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?size=338&ext=jpg&ga=GA1.1.735520172.1710892800&semt=ais' alt="twitter-logo"/>
              <img src=
              'data:image/png;base64,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'
              onClick={()=>{random()}} alt='tumblr-logo' />
    
              
            </div>
          </div>
        </div>
        
      );
}

export default RandomQuote