import './App.css'
import MovieCard from './Components/MovieCard.jsx'
import Home from './Pages/Home.jsx'
import { Routes, Route } from 'react-router-dom'
import Favorites from './Pages/Favorites.jsx'
import NavBar from './Components/NavBar.jsx'

function App() {

  return (
    <div>
      <NavBar />
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home />}/> 
          <Route path='/favorites' element={<Favorites />}/>
        </Routes>
      </main>
    </div>
  )
}

export default App
