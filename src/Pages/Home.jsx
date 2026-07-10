import { useState } from "react";
import MovieCard from "../Components/MovieCard.jsx";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    {id: 1, title: 'John Wick', release_date: '2020', url:''},
    {id: 2, title: 'Terminator', release_date: '2000', url:''},
    {id: 3, title: 'The Matrix', release_date: '1998', url:''},
  ];

  const handleSearch = (e) => {
    e.preventDefault(); //prevents the refresh after we hit submit button
    alert(searchQuery);
    setSearchQuery("----");
  }

  return(
    <div className="home">

      <form onSubmit={handleSearch} className="search-form">
        <input type="text" placeholder="Search for movies..." className="search-input" value={searchQuery} 
        onChange={(e) => setSearchQuery(e.target.value)}/>
        <button type='submit' className="search-button">Search</button>
      </form>

      <div className="movies-grid">
        {movies.map((movie) => (
          //movie.title.toLowerCase().startsWith(searchQuery) && 
          (<MovieCard movie={movie} key={movie.id}/>)
        ))}
      </div>
      
    </div>
  )
}

export default Home