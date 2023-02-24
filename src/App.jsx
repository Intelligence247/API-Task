import {useEffect, useState } from 'react'
import './App.css'
import { Loading } from './Components/Loading'

export default function App() {
  const [pic, setPic] = useState([])
  const [navigate, setNavigate] = useState(0)
const url = 'https://api.imgflip.com/get_memes'

const fetchAPI=()=>{
  fetch(url)
  .then((res)=>res.json())
  .then((datum)=>setPic(datum.data.memes))
  .catch((err)=> console.log(err))
}

 useEffect(() => {
  fetchAPI();
}, [])

const handleAdd=()=>{
  setNavigate(navigate+1)
  if(navigate === pic.length-1){
    setNavigate(0)
  }
}
const handleMinus=()=>{
  setNavigate(navigate-1)
  if(navigate===0){
    setNavigate(pic.length-1)
  }
  // setNavigate(9)
}
const rand= Math.floor(Math.random()*pic.length)
  return (
    <div className="App">
      
 {pic.length == 0 ?
<Loading/>
     :(
     <section className=''>
      <div className="imgWrapper">
   <img src={pic[navigate].url} alt="" />
   <figcaption>{pic[navigate].name}</figcaption>
   <button onClick={handleAdd}>To</button>
   <button onClick={handleMinus}>Fro</button>
   </div>
   
     </section>
      )
}

    </div>
  );
}

App
