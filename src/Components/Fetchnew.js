import React from 'react'
import axios from 'axios';
import {useState,useEffect} from 'react';
export default function Fetchnew() {
    const[New,getNews]=useState([]);
    const News=()=>{
       axios.get("https://meme-api.com/gimme/wholesomememes").then(response=>{
getNews([response.data])       })
    }
  return (
      <>
<div className="result">
{
    New.map((value)=>{
        return(
            <>
            <h1>{value.title}</h1>
            <img src={value.url} alt="" />
            </>
        )
    })
}
<div>
<button className="News" onClick={News}>FetchMeme</button>
</div>

</div>
</>

  )
}
