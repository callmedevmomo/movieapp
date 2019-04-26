import React, { Component } from "react";
import "./Movie.css";

class Movie extends Component {
  render() {
    return (
      <div>
        <MoviePoster />
        <h1> hello this is a movie!</h1>
      </div>
    );
  }
}

class MoviePoster extends Component {
  render() {
    return (
      <img src="http://www.theviewers.co.kr/news/photo/201903/30002_25680_2043.jpg" />
    );
  }
}
export default Movie;
