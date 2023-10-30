import './style/artist.css'
import './style/main.css'
import ArtistTrack from '../components/elements/ArtistTrack';
import Card from '../components/elements/Card';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getOneArtist, getArtistAlbums, getArtistTracks } from '../utils/utils';

function Artist() {
    const { artistID } = useParams();
    const [artist, setArtist] = useState([]);
    const [album, setAlbum] = useState([]);
    const [track, setTrack] = useState([]);

    useEffect(() => {
        getOneArtist(artistID)
            .then(fetchedArtist => {
                setArtist(fetchedArtist);
            })
            .catch(error => {
                console.error(error);
            });
    },[artistID])

    useEffect(() => {
        getArtistAlbums(artistID)
            .then(fetchedAlbums => {
                setAlbum(fetchedAlbums);
            })
            .catch(error => {
                console.error(error);
            });
    },[artistID])

    useEffect(() => {
        getArtistTracks(artistID)
            .then(fetchedTracks => {
                setTrack(fetchedTracks);
            })
            .catch(error => {
                console.error(error);
            });
    },[artistID])
    return (
        <div className='Artist'>
            <div className="artistBg">
                <img src={artist[0]?.images[0].url || "/images/bg3.png"} alt="artist" />

            </div>
            
            <div className='artist-wrap'>
                <div className='artist-container-left'>
                    <span className='streamingMonth sub-text'>89,242,000 MONTHLY LISTENERS</span>
                    <span className='artistName'>{artist[0]?.name || "The Weeknd"}</span>

                    <p className='followBtn'>FOLLOWING</p>

                </div>

                <div className='artist-container-right'>
                    <div className='artist-album-container'>
                        <p className='right-artist-title sub-text'>New release</p>

                        <div className='newest-artist-album'>
                            <img src={ album[0]?.images[0]?.url ||"/images/abtw.jpg"} alt='album' />
                            <div>
                                <p className='newestAlbum'>{album[0]?.name||"Live At SoFi Stadium"}</p>
                                <p className='sub-text'>{artist[0]?.name ||"The Weeknd"}</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className='popular-lists-wrap'>
                        <h2 className='right-artist-title sub-text'>Popular Song</h2>

                        <div className="popular-lists">
                            {track?.map(track => (
                                    <ArtistTrack key={track.id} trackName={track.name} trackDuration={track.duration_ms}/>
                                ))}
                            
                        </div>

                        <div className='artist-album-container'>
                            <p className='right-artist-title sub-text'>Albums</p>
                            <div className='album'>
                                {album.map(album => (
                                    <Card key={album.id} id={album.id} Name={album.name} Img={album.images[1]?.url}/>
                                ))}

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Artist;