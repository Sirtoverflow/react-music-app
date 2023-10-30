import Card from "../components/elements/Card";
import "./style/home.css";
import "./style/search.css";


function Search(){
return(
    <div className="Search">
        <div className="search-container">
            <div className="search-bar-container">
                <input type="search" id="search-bar" placeholder="What do you want to listen to?" />
            </div>

            <h2>Recent searcher</h2>
            <section>
                <Card 
                    className="artist-wide-card" 
                    Img="/images/artists/joji.jpg"
                    Name="Joji"
                />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />

                <Card />
                       <Card />
                       <Card />
                       <Card />
                       <Card />
                       <Card />
                       <Card />

            </section>
        </div>
    </div>
)
}

export default Search;