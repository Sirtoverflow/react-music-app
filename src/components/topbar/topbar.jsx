import './topbar.css'
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa6'

import TopBox from './topbox';
import React, { useState, useEffect} from "react";

function TopBar() {
    const [active, setActive] = useState();
    const [playlists, setPlaylists] = useState([]);


    const handleClick = event => {
        setActive(!active);
    }

    return (
        <div className="TopBar">
            <div className='angleTop'>
                <FaAngleLeft onClick={handleClick} style={{ color: active ? "#707070" : "white" }} />
                <FaAngleRight onClick={handleClick} style={{ color: active ? "white" : "#707070" }}/>
            </div>
            <div className='TopBar-wrap'>
                <div className="topbar-container">

                    <TopBox playlistID="theweekend" playlistName="the best of weekend"/>
                    <TopBox playlistID="bacsibuon" playlistName="the best of weekend"/>

                    {/* {listPlaylists} */}

                </div>
            </div>

        </div>
    );
}

export default TopBar;
