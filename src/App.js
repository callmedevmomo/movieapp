import React, { Component } from "react";
import "./App.css";
import Movie from "./Movie";

class App extends Component {
  // Render : componentWillMount() -> render() -> componentDidMount()
  // Update : componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()
  // State 변경(.setState({})) --> Render 자동 활성화
  state = {};
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        movies: [
          {
            title: "나의특별한형제",
            poster:
              "http://www.theviewers.co.kr/news/photo/201903/30002_25680_2043.jpg"
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
          },
          {
            title: "Leon",
            poster:
              "https://i.pinimg.com/736x/c9/d5/12/c9d5127cb21f42f462dac07d6b4189fa--jean-reno-figurative.jpg"
          }
        ]
      });
    }, 5000);
  }

  _renderMovies = () => {
    const movie = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />;
    });
    return movie;
  };
  render() {
    return (
      // function ()
      <div className="App">
        {this.state.movies ? this._renderMovies() : "Loading..."}
      </div>
    );
  }
}

export default App;
