import { createTheme} from '@mui/material/styles';

export const theme = createTheme({
    palette:{
        primary:{
            light: '#464649',
            main: '#1F1F23',
            dark: '#18181B'
        },

        secondary:{
            light: '#B98AFF',
            main: '#A970FF',
            dark: '#6C3DB3'
        },

        background:{
            default:'#18181B'
        }
    }
});