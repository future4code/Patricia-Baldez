import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import { StyledToolbar } from './style';
import {goToRecipeList, goToLoginPage} from "../routes/coordinator"

const  Header = () => {
  return (
      <AppBar position="static">
        <StyledToolbar>
        <Button onClick={() => goToRecipeList()} color="inherit">Cookenu</Button>
          <Button onClick={() => goToLoginPage()} color="inherit">Login</Button>
        </StyledToolbar>
      </AppBar>
  );
}
export default Header
