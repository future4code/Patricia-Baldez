import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider} from '@mui/material/styles';
import Router from './router/Router'
import { theme } from './styles/global';

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router/>
      </ThemeProvider>
    </div>
  );
}

export default App;
