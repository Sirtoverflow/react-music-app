import './artist-track.css'
import { useState } from 'react';

function ArtistTrack({trackName, trackArtist, trackDuration }) {
    var [isFavorite, setIsFavorite] = useState(false)
    var [isPlayed, setIsPlayed] = useState(false)
    const toggleFavorite = () => {
        setIsFavorite(!isFavorite)
    }
    const formatTime = (ms) => {
        var seconds = ms / 1000;
        const m = Math.floor((seconds % 3600) / 60)
        const s = Math.round(seconds % 60)
        var time = [m > 9 ? m : '0' + m || '0', s > 9 ? s : '0' + s].join(':');

        return time;

    }
    var trackDuration = formatTime(trackDuration)

const PlayPauseCard = (e) => {

        if (isPlayed) {
            console.log("pause from Card");
            e.currentTarget.classList.remove('active');
        } else {
            console.log("play from Card");
            e.currentTarget.classList.add('active');
        }
        setIsPlayed(!isPlayed);
    }
    return (
            <div onClick={PlayPauseCard} className='popular-song'>
                <p className='numbSong'>1</p>
                <p className='nameSong'> 
                    <span>{trackName || "Bliding Light"}</span>
                    <img id='active-wave' src="/images/icon/soundwave-active.svg" alt="sound wave" />
                </p>
                <p className='singerSong'>{trackArtist || "the weeknd"}</p>
                <p className='listeningSong sub-text'>{""|| "2,202,960"}</p>
                <p className='timeSong sub-text'>{trackDuration || "2,202,960"}</p>
                <p className='favoriteSong' onClick={toggleFavorite}><img src={isFavorite ? "/images/icon/heart-active.svg" :"/images/icon/white-heart.svg" } alt="favorite" /></p>
            </div>
    );
}

export default ArtistTrack;