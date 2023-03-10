import React, {useState} from  "react";
import { ReactDOM } from 'react';
import './style.css';
import Meme from "./Meme"
import memeLOGO from "./images.jpeg"


export function App() {
  return (
    <div className='app-container'>
      <Meme memeLOGO={memeLOGO} />
    </div>
  );
  }


  
export default App;