/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

// ******Smart Component

// class Movie extends Component {
//   static propTypes = {
//     title: PropTypes.string.isRequired,
//     poster: PropTypes.string.isRequired
//   };
//   render() {
//     return (
//       <div>
//         <MoviePoster poster={this.props.poster} />
//         <h1>{this.props.title}</h1>
//       </div>
//     );
//   }
// }
// class MoviePoster extends Component {
//   static propTypes = {
//     poster: PropTypes.string.isRequired
//   };
//   render() {
//     return <img src={this.props.poster} alt="Movie Poster" />;
//   }
// }

// dumb component(stateless functional) : 한 개의 props의 존재만으로도 가능 :: Component Life Cycle , render() (x)
// dumb component => class가 아니기 때문에 this.props 사용 (x) *변경이 없는 Component에서 사용
//{title, poster} are the props passed from App.js to the Movie Component.

function Movie({ title, poster }) {
  return (
    <div>
      <MoviePoster poster={poster} />
      <h1>{title}</h1>
    </div>
  );
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
};

function MoviePoster({ poster }) {
  return <img src={poster} alt="Movie Poster" />;
}
MoviePoster.propTypes = { poster: PropTypes.string.isRequired };

export default Movie;
