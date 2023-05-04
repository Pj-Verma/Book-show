import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import MovieList from './components/MovieList/MovieList';
import Movie from './pages/movieDetail/Movie';
import Book from './components/Book/Book';
function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path='shows/:id' element={<Movie/> }></Route>
          <Route path='shows/:type' element={<MovieList/>}></Route>
          <Route path='shows/:id/images' element={<Book/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
