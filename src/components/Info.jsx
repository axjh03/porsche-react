import { useState } from "react";
import "./Info.css";
import "./InfoContent.css";
import InfoContent from "./InfoContent";

export default function Info() {

  const [prevButton, setActiveButton] = useState('p718CaymanGT4');
  const [content, setContent] = useState(<InfoContent model={prevButton} />);

      // here toogleInfo is an arrow function
    const toogleInfo = (ButtonID) => {
        if(prevButton !== ButtonID){
            setActiveButton((prevButton) => {
                document.getElementById(prevButton).classList.remove('active');
                document.getElementById(ButtonID).classList.add('active');
                setContent(<InfoContent model={ButtonID} />);
                return ButtonID;
            });
        }
    };
    
 return (
    <div className="info">
      <h2>CAR INFO</h2>
      <div className="button-container">
        <button id="p718CaymanGT4" className="active" onClick={()=>toogleInfo('p718CaymanGT4')}>
          718 Cayman GT4
        </button>
        <button id="pTaycan" onClick={()=>toogleInfo('pTaycan')}>
          Taycan
        </button>
        <button id="p911gt3rs" onClick={()=>toogleInfo('p911gt3rs')}>
          911 GT3 RS
        </button>
      </div>
      {content}
    </div>
  );
}
