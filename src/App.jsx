import {useEffect, useState } from 'react'
import './App.css'
import { Loading } from './Components/Loading'

export default function App() {
  const [pic, setPic] = useState([])
  const [navigate, setNavigate] = useState(99)
  const [color, setColor] = useState('#000000')
  const [color2, setColor2] = useState('#fff')
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
  const randC= "#"+Math.random().toString(16).substr(2,6)
  const randC2= "#"+Math.random().toString(16).substr(2,6)
  setColor(randC)
  setColor2(randC2)
  console.log(randC)

  setNavigate(navigate+1)
  if(navigate === pic.length-1){
    setNavigate(0)
     }
}
const handleMinus=()=>{
  const randC= "#"+Math.random().toString(16).substr(2,6)
  setColor(randC)
  const randC3= "#"+Math.random().toString(16).substr(2,6)
setColor2(randC3)
  setNavigate(navigate-1)
  if(navigate===0){
    setNavigate(pic.length-1)
    
  }
}
const rand= Math.floor(Math.random()*pic.length)
  return (
    <div className="App">
 {pic.length === 0 ?
<Loading/>
     :(
       <section className=''>
      <h1 style={{background:`linear-gradient(135deg, ${color2}, ${color})`, animation:' filter 2s infinite linear'}} >Are you a memester? We can assure you of getting the best memes here!!!</h1>
        <div className="flex justify-center gap-4">
   <button onClick={handleAdd}><span></span></button>
      <div className="imgWrapper">
        <div className="imgs">
   <img src={pic[navigate].url} alt="" />
   </div>
   <figcaption style={{color:`${color}`}}>{pic[navigate].name}</figcaption>
   </div>
  
   <button onClick={handleMinus}><span></span></button>
   </div>
     </section>
      )
}

    </div>
  );
}

App
