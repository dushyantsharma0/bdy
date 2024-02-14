import './main.css'
import { useState } from 'react';

function Main(props){
    const [state, setstate] = useState(true);
    const [yes, setyes] = useState(false);
    const [img2, setimg2] = useState(false);
    const [final, setfinal] = useState(false);
    function wish(){
        setyes(true)
      setstate(false)
      setTimeout(() => {
        setyes(false)
        setimg2(true)
      }, 2000);
    }
    return(
        <>
         {
            final?
        <div className='maindiv'>
          <div className='fstdiv'>
            <h3 className='hding4'>मिले आपको खुशियां ही
खुशियां जिंदगी भर
कभी ना मिले कोई गम
आप मनाओ जन्मदिन ढेर सारे
मिठाइयों से अपने परिजनों संग
जन्मदिन की शुभकामनायें</h3>
          </div>
          <div className='seconddiv'>
            <h3 className='hding3'>जन्मदिन के ये ख़ास लम्हें मुबारक
आँखों में बसे नए ख्वाब मुबारक
जिंदगी जो लेकर आई है आपके लिए आज
वो तमाम खुशियों की हंसीं सौगात मुबारक</h3>
          </div> 

    
        </div>:<>
        
        <h1 className='hding'>Happy BIRTHDAY DEAR   </h1>
                     <h1 style={{textAlign:"center"}} className='hding'>{props.name} </h1>
        <h2 className='hding2' >{props.sender}  की तरफ से आपको जन्मदिन की हार्दिक शुभकामनाएं</h2>
        
        {
        yes?<><img src="https://media.tenor.com/RCQgbxVWhYgAAAAj/discord-discordgifemoji.gif" alt="" />
        <img src="https://media.tenor.com/4T0NBfynO9gAAAAj/explosion-boom.gif" alt="" />
        </>:null
        }
        {
            state?<> <img onClick={wish} className='img' src="https://media.tenor.com/HS0_IywXzhsAAAAj/happybirthdaytoyou-hbd.gif" alt="" />
            
            <p className='styl' >{props.name} Your Birthday Gift </p><p className='icon'> click on&#9757;</p>
            
            </>:null
        }
       
       {
        img2?<><img style={{marginLeft:"70px"}} src="https://media.tenor.com/bh9MAiCpL6wAAAAj/birthday-cake.gif" alt="" />
         <img onClick={()=>setfinal(true)}  style={{marginLeft:"70px"}} src="https://media.tenor.com/NN65MTq6GuMAAAAj/happy-birthday.gif" alt="" />
          
         <p className='styl' >{props.name} finaly  </p><p className='icon2'> click on &#9757;</p>
        </>:null
              
       }
      
          
        <p className='hding2'> {props.name}आपके जन्मदिन पर आपके परिवार के सदस्य {props.sender} ने आपको जन्मदिन की हार्दिक शुभकामनाएं भेजी हैं आपको जन्मदिन की बहुत-बहुत शुभकामनाएं</p>
        
        
        
        
        
        
        
        </>
       }
      
        </>
    )
}
export default Main