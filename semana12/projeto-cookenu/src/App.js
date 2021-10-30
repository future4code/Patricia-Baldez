import React from "react"
import Router from "./routes/Router";
import theme from "./constants/theme"
import { ThemeProvider } from "@material-ui/styles"

const App = () => {
  return (
    
    <ThemeProvider theme={theme}>
      <Router/>
    </ThemeProvider>
  );
}

export default App;
