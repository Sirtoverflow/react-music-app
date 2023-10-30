import Home from './home';
import Search from './search';
import Artist from './artist';
import Playlists from './playlists';
import { Routes, Route} from 'react-router-dom';

function Main() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/search" exact element={<Search />} />
      <Route path="/artist/:artistID" element={<Artist />}  />
      <Route path="/playlist/:playlistID" element={<Playlists />} />
    </Routes>
  );
}

export default Main;