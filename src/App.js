import logo from './logo.svg';
import './App.css';
import MyComponent from './use';
import { BrowserRouter as Router, useLocation,Routes,Route } from 'react-router-dom';
import Main from './main';
import Gift from './gift';
import audio from './audio/1.mp3'
import { useRef, useState } from 'react';


const App = () => {
  const [isclicked, setisclicked] = useState(true);
  const audioRef = useRef(null);
  const handleButtonClick = () => {
    audioRef.current.play();
    setisclicked(false)
  };
  return (
    <>
      <audio ref={audioRef} loop src={audio} />
    {
      isclicked?<>  <button className="btn" onClick={handleButtonClick} >click on this</button>
    
      </>:null
    }
  


      <MyComponent />
      
      
   
    </>
  );
};
export default App;
