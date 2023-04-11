// MovieSearch.tsx
import React, { useState } from 'react';
import axios from 'axios';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

const MovieSearch: React.FC = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState<Movie[]>([]);

  const searchMovies = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const apiKey = '5e6746c72bfca867d4094b886516b7aa';
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;

    try {
      const res = await axios.get(url);
      setMovies(res.data.results);
    } catch (err) {
      console.error(err);
    }
  };

  // MovieSearch.tsx
// ...
return (
    <div>
      <form onSubmit={searchMovies}>
        <label htmlFor="query">Movie Name:</label>
        <input
          type="text"
          id="query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div className="movies-container">
        {movies.map((movie) => (
          <div className="movie-card" key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
            />
            <div className="movie-title">{movie.title}</div>
          </div>
        ))}
      </div>
    </div>
  );

};

export default MovieSearch;
