import React, { Component } from "react";
import "./App.css";
import Movie from "./Movie";

const movies = [
  {
    title: "나의특별한형제",
    poster: "http://www.theviewers.co.kr/news/photo/201903/30002_25680_2043.jpg"
  },
  {
    title: "Avengers",
    poster: "http://i.ebayimg.com/images/i/111802852108-0-1/s-l1000.jpg"
  },
  {
    title: "Little forest",
    poster:
      "https://media-cache.cinematerial.com/p/500x/lkbtp09s/little-forest-south-korean-movie-poster.jpg"
  },
  {
    title: "Call Me By Your Name",
    poster:
      "https://media-cache.cinematerial.com/p/500x/fsvwpcn1/call-me-by-your-name-slovak-movie-poster.jpg"
  },
  {
    title: "Final Portrait",
    poster:
      "https://media-cache.cinematerial.com/p/500x/iymbu1i6/final-portrait-spanish-movie-poster.jpg"
  }
];
class App extends Component {
  render() {
    return (
      <div className="App">
        {movies.map((movie, index) => {
          return (
            <Movie title={movie.title} poster={movie.poster} key={index} />
          );
        })}
      </div>
    );
  }
}

export default App;
