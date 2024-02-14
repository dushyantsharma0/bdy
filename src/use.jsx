import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import Main from './main';
import { useState } from 'react';

const MyComponent = () => {
   const [see, setsee] = useState(false);
   const keyvalue=window.location.search
   const useparams= new URLSearchParams(keyvalue)
   const name1 =useparams.get('name')
   const name2 =useparams.get('name2')
   
   
    const handleButtonClick = () => {

      const message = `http://n.vipinfo.in/msg/?name=${name1}&&name2=${name2}`; // Replace with the desired message
  
      const url = `https://api.whatsapp.com/send?phone=&text=${encodeURIComponent(message)}`;
      window.open(url);
    };
  


    return (
        <>
         <Main name={name1} sender={name2}/>
     
     <form >
      <label > </label>
        <input className='inp' type="text" name='name' required placeholder='जिसका जन्मदिन है।' />
        <input  className='inp'  stype="text" name='name2' required placeholder=' जो भेज रहा है' />
        <button className='mnbtn'  type='submit'>👉देखें</button>
     </form>
      <p style={{textAlign:"center", fontWeight:"900",textTransform:"capitalize"}}>First Fill This Form and then click on👉देखें Button then click on share button </p>
      <button className='btnlst' onClick={handleButtonClick}>share on whatsapp</button>
     
    
             <p style={{marginTop:"80px",textAlign:"center"}}>This is made By Dushyant Sharma </p>
     </>
    );
  };
  export default MyComponent