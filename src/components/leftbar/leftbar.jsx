import {Link,NavLink} from "react-router-dom";
import './leftbar.css'

function LeftBar(props) {

    function changeIcon(anchor){
        var itemID = anchor.target;
        var curRouter = window.location.pathname

    }
    return (
        <div className="Leftbar">
            <div className="leftbar-container">
                <ul>
                    <li>
                        <Link to="/"><img id="brandlogo" className="brand-logo" src="/images/icon/spotify.png" alt="brand" /></Link>
                    </li>
                    <li>
                        <Link to="#"><img id="userAvt" className="avtUser" src="/images/boy2.png" alt="user avatar" /></Link>
                    </li>
                    <li>
                        <Link to="/" onClick={changeIcon}><img id="home" src={props.icon || "/images/icon/home-uac.svg"} alt="home" /></Link>
                    </li>
                    <li>
                        <Link to="/search" onClick={changeIcon}><img id="find" src={props.icon || "/images/icon/find-uac.svg"} alt="find" /></Link>
                    </li>
                    <li>
                        <Link to="/artist" onClick={changeIcon}><img id="library" src={props.icon || "/images/icon/library-uac.svg"} alt="library" /></Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default LeftBar;
