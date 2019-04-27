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

function Movie({ title, poster, genres, synopsis }) {
  return (
    <div className="Movie">
      <div className="Movie_Columns">
        <MoviePoster poster={poster} alt={title} />
      </div>
      <div className="Movie_Columns">
        <h1>{title}</h1>
        <div className="Movie_Genres">
          {genres.map((genre, index) => (
            <MovieGenre genre={genre} key={index} />
          ))}
        </div>
        <p className="Movie_Synopsis">{synopsis}</p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  synopsis: PropTypes.string.isRequired
};
//({poster}) is taking the 'poster variable from the props.
// function MoviePoster(props) -> props.poster
// or
// function MoviePoster({poster}) -> poster
function MoviePoster({ poster, alt }) {
  return <img src={poster} alt={alt} title={alt} className="Movie_Poster" />;
}
function MovieGenre({ genre }) {
  console.log(genre);
  return <span className="Movie_Genre">{genre}</span>;
}
MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};
MovieGenre.propTypes = { genre: PropTypes.string.isRequired };
export default Movie;
