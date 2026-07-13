import './css/App.css'
import MovieCard from './Components/MovieCard.jsx'
import Home from './Pages/Home.jsx'
import { Routes, Route } from 'react-router-dom'
import Favorites from './Pages/Favorites.jsx'
import NavBar from './Components/NavBar.jsx'
import { MovieProvider } from './contexts/MovieContext.jsx'

function App() {

  return (
    <MovieProvider>
      <NavBar />
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home />}/> 
          <Route path='/favorites' element={<Favorites />}/>
        </Routes>
      </main>
    </MovieProvider>
  )
}

export default App
