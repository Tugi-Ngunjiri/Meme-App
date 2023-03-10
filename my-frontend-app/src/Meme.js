import React from 'react'

export default function Meme(props) {

// using state
 const [appData, setAppData] = React.useState({
   enterfirstline:"",
   entersecondline:"",
   
memepicture:"http://i.imgflip.com/28j0te.jpg",

 })

// using [Api ImgFlip]
// We are using so its a sideefect need useEffect
 // We need a state to store the data

const [newMemeData,setNewMemeData] = React.useState([])
 React.useEffect(() =>{
  //append point

 fetch("https://api.imgflip.com/get_memes")
 .then(response => response.json())
 .then((memeData) => setNewMemeData(memeData.data.memes))
})



function getNewMeme(){
 const randomNumber = Math.floor(Math.random(1) *newMemeData.length )
const url = newMemeData[randomNumber].url
console.log(url);
setAppData((prevdata) => {
  return {
    ...prevdata,
    memepicture: url
  }
})
}

function enterline(event){
 setAppData(prevAppData => {
  return ({
    ...prevAppData,
    [event.target.name]: event.target.value
  })

 })

}
 console.log(appData);

return (
    <div className="meme-container">
      <nav className="navbar">
        <img className="memeLOGO" src={props.memeLOGO} alt="memeLOGO" />
        <p className="title">Meme Generator</p>
      </nav>

      <div className="input-field" >
        <input type="text" placeholder="Enter the first line ..." name="firstline" onchange={enterline} value={appData.firstline} />
       <input type="text" placeholder="Enter the second line ..." name="secondline" onchange={enterline} value ={appData.secondline} />
  </div>
   <button className="generateBTN" onClick={getNewMeme}> 
   Generate a new Meme</button>
 <img className="imageMEME"  src= {appData.memepicture} alt="randomMeme" />
 </div>
  )
} 