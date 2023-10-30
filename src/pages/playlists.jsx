import './style/home.css';
import './style/playlists.css'
import ArtistTrack from '../components/elements/ArtistTrack';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Playlists() {
    const [tracks, setTracks] = useState([]);
    const { playlistID } = useParams();
    const [playlistInfo, setPlaylistInfo] = useState(null);


    // useEffect(() => {
       
    //   }, [playlistID]);
    
    //   if (!playlistInfo) {
    //     return <div>Loading playlistID: {playlistID}</div>;
    //   }

    return (
        <div className="Home">
            <div className="home-wrap">
                <div className="home-container">

                    <h2>Playlist</h2>
                    <section className='addspace'>
                        <div className='popular-lists-wrap'>
                            <div className="playlists popular-lists ">
                                <ArtistTrack trackName="hu" artistName="hi"/>
                                <ArtistTrack/>
                                
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Playlists;
