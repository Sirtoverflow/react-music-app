import './card.css'
import { useState } from 'react';
import { useDataFromChild } from '../../utils/passData';
import { useNavigate } from 'react-router-dom';

function Card({id,className, Name, Img, setNameSong, cardType}) {
    const navigate = useNavigate();
    const { setDataFromChild } = useDataFromChild();
    var [isPlayed, setIsPlayed] = useState(false);

    let cardTypeValue = cardType || "album";

    const sendData = (Name) => {
        const data = [setIsPlayed(isPlayed),Name, Img];
        console.log(data);
        setDataFromChild(data); // This will update the data in the parent
      };

    const PlayPauseCard = (e) => {
        if (isPlayed) {
            e.currentTarget.classList.remove('isCardplay');

            //state of parent
            setNameSong(" ")
        } else {
            e.currentTarget.classList.add('isCardplay');

            //state of parent
            sendData(Name); //to player.jsx
            setNameSong(Name); // to home.jsx
        }
        setIsPlayed(!isPlayed);
        e.stopPropagation()
    }

    const CardOnClick = (e) => {
        if (cardTypeValue === "album") navigate(`/playlist/${id}`)
        else navigate(`/artist/${id}`)
    }

    return(
        <div className= {`card-container ${ className || ''}`} onClick={CardOnClick}>

        <div className='card'>

            <img src={ Img || "/images/foryou/4fu.jpg"} alt="the" />

            <span className='main-text'>{ Name || "a name song or"}</span>

            <span className='sub-text'>{ Name || "artist"}</span>

            <button className='ButtonInner' onClick={PlayPauseCard}><img src={isPlayed ? "/images/icon/pause.svg" : "/images/icon/play.svg"} alt="ico" /></button>
                
            <div className='tag-container'>
                <div className="tag-type">
                    
                    <span id="tag-type-value">Album</span>

                </div>
            </div>

        </div>
    </div>
    ) 
}
export default Card;