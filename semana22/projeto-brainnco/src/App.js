import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom';
import { LotteriesProvider } from './contexts/LotteriesContext';
import { Main } from './components/Main';


const App=()=> {
  return (
    <Router>
      <LotteriesProvider>
        <Switch>
          <Route path="/:id" component={Main} />
          <Route exact path="/">
            <Redirect to="/0" />
          </Route>
        </Switch>
      </LotteriesProvider>
    </Router>
  );
}

export default App;
