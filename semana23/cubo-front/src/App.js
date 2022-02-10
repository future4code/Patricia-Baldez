
import './App.css';
import GlobalState from './contexts/global/GlobalState';
import Router from './router/Router';
function App() {
  return (
    <GlobalState>
      <Router/>      
    </GlobalState>
  );
}

export default App;
