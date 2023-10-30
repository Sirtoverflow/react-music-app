import { useEffect, useState } from 'react';
import { getArtists, getRecommendTrack} from '../utils/utils';
import Card from '../components/elements/Card';
import './style/home.css'


function Home() {
    const [artists, setArtists] = useState([]);
    const [nameSong, setNameSong] = useState(" ");
    const [recommend, setRecommend] = useState([]);

    useEffect(() => {
        getArtists()
            .then(artists => {
                setArtists(artists);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    // useEffect(() => {
    //     getRecommendTrack()
    //         .then(recommend => {
    //             setRecommend(recommend);
    //         })
    //         .catch(error => {
    //             console.error(error);
    //         });
    // }, []);

    return (
        <div className="Home">
            <div className="home-wrap">
                <div className="home-container">

                    <h2>Playing {nameSong} ...</h2>
                    <section className='addspace'></section>

                    <h2>Artist From API</h2>
                    <section className='addspace'>
                        {artists.map(artist => (
                            <Card key={artist.id} id={artist.id} Name={artist.name} Img={artist.images[2]?.url} setNameSong={setNameSong} cardType='artist'/>
                        ))}
                        
                    </section>

                    
                    <h2>Good Afternoon</h2>

                    <section>
                        {/* {recommend.map(recommend => (
                            <Card key={recommend.id} id={recommend.id} Name={recommend.name} Img={recommend.album.images[1]?.url} setNameSong={setNameSong}/>
                        ))} */}
                    </section>

                    <section>

                    </section>



                </div>
            </div>
        </div>
    );
}

export default Home;
