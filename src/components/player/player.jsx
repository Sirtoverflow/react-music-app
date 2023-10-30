import React from "react";
import { useRef, useState } from "react";
import './player.css';

import song from '../../audio/music.mp3';
import { useDataFromChild } from '../../utils/passData';

function Player() {
    
    const { dataFromChild } = useDataFromChild();
    var isPlayedTrackName = dataFromChild[1]
    var isPlayedTrackImg = dataFromChild[2]

    var [isPlayed, setIsPlayed] = useState(false);
    var audioRef = useRef(new Audio(song));
    const trackTime = audioRef.current.duration || null;
    const progressbar = document.querySelector(':root');

    const formatTime = (seconds) => {

        const m = Math.floor((seconds % 3600) / 60)
        const s = Math.round(seconds % 60)
        var time = [m > 9 ? m : '0' + m || '0', s > 9 ? s : '0' + s].join(':');
        
        if (time === "0NaN:0NaN") {
            time = "0:00"
        } 
        return time;

    }
    const onTimeUpdate = () => {
        var trackCurTime = audioRef.current.currentTime;
        document.getElementById("startTime").innerHTML = formatTime(trackCurTime)
        const progress = (trackCurTime / trackTime) * 100;
        progressbar.style.setProperty('--progress-bar-transform', `${progress}%`);

        if (trackCurTime === trackTime) {
            setIsPlayed(false);
        }
        
    };
    audioRef.current.addEventListener("timeupdate", onTimeUpdate);

    const PlayPause = () => {

        if (isPlayed) {
            audioRef.current.pause();
            console.log("pause");

        } else {
            audioRef.current.play();
        }

        setIsPlayed(!isPlayed);
    }

    return (
        <div className="Player">
            <div className='Playerwrapp'>
                <div className='player-body'>
                    <div className="flex-container">
                        <div className='left-imgs'>
                            <img className="left-music-img" src={ isPlayedTrackImg ||"/images/tinhthucsaugiacngudong.jpeg"} alt='album pic' />
                        </div>
                        <div>
                            <div className='left-container'>
                                <p className='left-name'>{ isPlayedTrackName || "tỉnh thức sau giấc ngủ đông" }</p>
                                <p className='left-artist sub-text'>{ isPlayedTrackName || "GREY D, B Ray" }</p>
                            </div>
                        </div>

                        <div className='middle-container'>
                            <ul className="list-inline">
                                <li><img src='/images/icon/1.ico' alt='shuffe'></img></li>
                                <li><img src='/images/icon/2.ico' alt='back'></img></li>
                                <li>
                                    <div className='playBtn' onClick={PlayPause}>
                                        <img height="16" width="16" src={isPlayed ? "/images/icon/pause.svg" : "/images/icon/play.svg"} alt="pause" />
                                    </div>
                                </li>
                                <li><img src='/images/icon/4.ico' alt='next'></img></li>
                                <li><img src='/images/icon/5.ico' alt='replay'></img></li>

                            </ul>

                            <div className='loadingSong'>
                                <span id="startTime">{ "-:--" || onTimeUpdate}</span>

                                <div className="timelineSong">
                                    <div className='theSongtime'>
                                        <div className="progressbar"></div>
                                    </div>
                                    <div className="progressbar-handle"></div>
                                </div>

                                <span id="endTime">{ formatTime(trackTime)|| "-:--" }</span>
                            </div>
                        </div>

                        <div className='right-container'>
                            <img src='/images/icon/volume-icon.ico' alt='volume'></img>
                            <div className='volume'>
                                <div className="volumebar-handle"></div>
                                <div className="volume-bar"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Player;
