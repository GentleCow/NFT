import equalibrium from "./style-images/images/equilibrium.jpg";
import ethereum from "./style-images/images/Icons/icon-ethereum.svg";
import clock from "./style-images/images/Icons/icon-clock.svg";
import avatar from "./style-images/images/8aab586e9c05f2d.png";
import view from "./style-images/images/Icons/icon-view.svg";
import "./App.css";

import styles from "./style-images/styles";

function App() {
  return (
   <main style={{...styles.size}} >
   <div className="main">
    <div className="sizing">
     <div className="finalHover">
      <img src={equalibrium} alt="equalibrium" className="imageColor" />
       <div className="eye"> <img src={view} alt="view" className="vieweye" /> </div>
    </div>
    </div> 

   <div style={{...styles.mainContainer}} >
  <h1 className="hoverMe" style={{...styles.h1}} > Equilibrium #3429 </h1>

     <p style={{...styles.p}}> Our Equilibrium collection promotes balance and calm. </p>

        <div style={{...styles.container}} className="container">

          <div style={{...styles.ethContainer}}> 
            <div> <img src={ethereum} alt="ethereumIcon" /> </div>
              0.041 ETH 
            </div>

          <div style={{...styles.clockContainer}}>
            <div> <img src={clock} alt="clockIcon" /> </div>
               3 days left 
             </div>

        </div> 

        <div style={{...styles.stick}} />

            <div style={{...styles.lastContainer}} >
             
             <div> <img src={avatar} alt="avatarIcon"
             style={{...styles.avatarSize}} /> </div>
                  <div style={{...styles.text}}>
                      Contact
                  </div> 

                  <div> 
                  <a style={{...styles.textColor}} className="hoverMe2"
                  href="https://www.facebook.com/giorgi.tayniashvili.108/"
                  >George Takniashvili</a>
                      </div>

            </div>
       </div>
    </div> 
  </main> 
 )
};

export default App;
