import React, { useEffect } from "react";
import MovieCard from "./MovieCard";
function FetchMovie(props) {
  const [result, setResult] = React.useState([]);
  const apiKey = "api_key=28ca7c57c8782bba24844aebcf7d3ca4";
  const categories = {
    popular: "https://api.themoviedb.org/3/movie/popular?",
    search: "https://api.themoviedb.org/3/search/movie?",
    upcoming: "https://api.themoviedb.org/3/movie/upcoming?",
    top_rated: "https://api.themoviedb.org/3/movie/top_rated?",
    similar: `https://api.themoviedb.org/3/movie/${props.id}/similar?`
  };
  useEffect(() => {
    switch (props.category) {
      case "popular":
        getMovies([categories.popular, apiKey].join(""));
        break;
      case "search":
        getMovies([categories.search, apiKey, props.q].join(""));
        break;
      case "upcoming":
        getMovies([categories.upcoming, apiKey].join(""));
        break;
      case "top rated":
        getMovies([categories.top_rated, apiKey].join(""));
        break;
        case "similar":
          getMovies([categories.similar, apiKey].join(""));
          break;
      default:
        <h1>Oops!</h1>;
        break;
    }
  }, []);

  function getMovies(event) {
    console.log("fetch edildi");
    fetch(event)
      .then((response) => response.json())
      .then((result) => {
        setResult(result.results);
      })
      .catch((error) => console.log("error", error));
  }

  return (
    <div className='text-light'>
      {result.length > 0 ? (
        <MovieCard result={result} />
      ) : (
        <h1>Aradiginiz kriterlere uygun film bulunamadi</h1>
      )}
    </div>
  );
}

export default FetchMovie;