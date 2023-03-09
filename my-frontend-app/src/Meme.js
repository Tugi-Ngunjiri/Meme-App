import React from 'react'

export default function Meme(props) {

// using state
 const [appData, setAppData] = React.useState({
   firstline:"",
   secondline:"",
   memepicture:"http://i.imgflip.com/28j0te.jpg",

 })

// using [Api ImgFlip]
// We are using so its a sideefect need useEffect
 // We need a state to store the data

const [newMemeDat,setNewMemeData] = React.useState([])
 React.useEffect(() =>{
  //append point

 fetch("https://api.imgflip.com/get_memes")
 .then(response => response.json())
 .then(memeData => setNewMemeData(data.memes.url))
})



function getNewMeme(){
 const randomNumber = Math.floor(math.ranndom() *newMemeData.lenght )
const url = newMemeData[randomNumber].url
console.log(url)
}





  return (
    <div className="meme-container">
      <nav className="navbar">
        <img className="memeLOGO" src={props.memeLOGO} alt="memeLOGO" />
        <p className="title">Meme Generator</p>
      </nav>

      <div className="input-field" >
        <input type="text" placeholder="Enter the first line ..." />
      
      <input type="text" placeholder="Enter the second line ..."  />
  </div>
   <button className="generateBTN" onClick={getNewMeme}> 
   Generate a new Meme</button>
 <img className="imageMEME"  src= {appData.memepicture} alt="randomMeme" />
 </div>
  )
} 