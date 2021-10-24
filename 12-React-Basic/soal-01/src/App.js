import { Component } from "react";
import MovieCard from "./components/MovieCard";
import animeList from "./dummy-data";

class App extends Component {
  render() {
    return (
      <div className="container my-5">
        <h1 className="text-center">Anime List</h1>
        <div className="container my-5">
          <div id="daftar-anime" className="row">
            {animeList?.map((anime) => (
              <div className="col-lg-3 col-md-4 col-sm-6 col-12 my-3" key={anime.mal_id}>
                <MovieCard movie={anime} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
