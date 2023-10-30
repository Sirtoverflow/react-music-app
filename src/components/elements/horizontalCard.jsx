import { useState } from 'react';
import './card.css'
import './horizontalCard.css'
import { useDataFromChild } from '../../utils/passData';


function HorizontalCard({className, Name, Img}) {
    const { setDataFromChild } = useDataFromChild();

    const sendData = (Name) => {
        // const data = Name
        const data = [setIsPlayed(isPlayed),Name];
        // console.log(tdata);
        console.log(data);
        setDataFromChild(data); // This will update the data in the parent
      };

    var [isPlayed, setIsPlayed] = useState(false);
    const PlayPauseCard = (e) => {

        if (isPlayed) {
            console.log("pause from Card");
            e.currentTarget.classList.remove('isCardplay');
        } else {
            console.log("play from Card");
            e.currentTarget.classList.add('isCardplay');

            sendData(Name); //to player.jsx
        }
        setIsPlayed(!isPlayed);
    }

    return (
        <div className={`section-container ${className}`}>
            <div className='suggest'>
                <img src={Img || "/images/tracks/1haisam.jpg"} alt="tw" />
                
                <span>{Name || "name song or artist"}</span>

                <span className='ButtonInner' onClick={PlayPauseCard}><img src={isPlayed ? "/images/icon/pause.svg" : "/images/icon/play.svg"} alt="ico" /></span>

            </div>
        </div>
    )
}

export default HorizontalCard;