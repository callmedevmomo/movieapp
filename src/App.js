import React, { Component } from "react";
import "./App.css";
import Movie from "./Movie";

class App extends Component {
  // Render : componentWillMount() -> render() -> componentDidMount()
  // Update : componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()
  // State 변경(.setState({})) --> Render 자동 활성화
  state = {};
  componentDidMount() {
    fetch("https://yts.am/api/v2/list_movies.json?sort_by=rating");
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
