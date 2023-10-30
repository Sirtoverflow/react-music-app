import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';


function TopBox({playlistID,playlistName, playlistArtist}) {
    const navigate = useNavigate();
    const [active, setActive] = useState();

    const is_active = <div className='is-active'>
        <div className='box-active'></div>
        <img className='box-waving' src="/images/icon/soundwave-active.svg" alt='sound wave' />
    </div>

    const handleClick = event => {
        setActive(!active)
        if (!active) {
            navigate(`/playlist/${playlistID}`)
        }
    }

    return (
        <div className="topbar-box" onClick={handleClick}>
            <div className='topbar-box-container'>
                <p className="sub-text">{playlistArtist||'ARTTIST'}</p>
                <span>{playlistName||'THE WEEKEND'}</span>
                {active && is_active}
            </div>
        </div>
    )
}

export default TopBox;
