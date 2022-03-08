import React from 'react'
import Toolbar from '@mui/material/Toolbar';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { ContainerSearch } from './styled';

const SearchBar = styled('div')(({ theme }) => ({
    position: 'relative',
    display: 'flex',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    width: '100%',
    // border: '1px solid red'
}));
  
const SearchIconWrapper = styled('button')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#EFEFF1',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    border: 'none'
}));
  
const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: '#EFEFF1',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),      
    },
}));

const Search = (props) => {
    return (
        <ContainerSearch onSubmit={props.onSubmit}>
            <Toolbar sx={{padding: 0}}>
                <SearchBar>
                    <SearchIconWrapper>
                        <SearchIcon/>
                    </SearchIconWrapper>

                    <StyledInputBase
                        placeholder="Buscar video..."
                        inputProps={{ 'aria-label': 'search'}}
                        value={props.value}
                        onChange={props.onChange}
                    />
                </SearchBar>
            </Toolbar>
        </ContainerSearch>
    )
}

export default Search
