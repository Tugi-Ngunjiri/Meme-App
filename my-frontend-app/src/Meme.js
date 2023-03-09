import React from 'react'

export default function Meme(props) {

// using state
 const [appData, setAppData] = React.useState({
   firstline:"",
   secondline:"",
   memepicture:"http://i.imgflip.com/28j0te.jpg",

 })

// using Api






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
   <button className="generateBTN"> Generate a new Meme</button>
 <img className="imageMEME"  src= {appData.memepicture} alt="randomMeme" />
 </div>
  )
} 