import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Movies from './Pages/Movies';
import Details from './Pages/Details';
import api from './api';
import Footer from './Components/Footer';
import Header from './Components/Header';


const api_key = "7cbb88dd714f84168b91799865f574d3";
function App({goBack, genres}) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getCharacters() {
      const response = await api.get(`/movie/popular`, {
        params: {api_key, language:"pt-BR"}
      });
      setMovies(response.data.results);
     
    }
    getCharacters();
  }, []);

  return (
    <Router>
      <Header goBack={goBack} />
      <Switch >
          <Route exact path='/'>
            <Movies movies={movies}/>
          </Route>
          <Route exact path='/details/:id'>
          <Details goBack={goBack} genres={genres}/>
          </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;