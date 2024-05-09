import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blue, orange, grey } from '@mui/material/colors';
import './App.css'
import { Header } from './components/Header';
import { Home } from './pages/Home';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Roboto',
    ].join(','),
  },
  palette: {
    primary: {
      main: blue[900],
    },
    secondary: {
      main: orange[700],
    },
    background: {
      default: '#FFF',
      paper: grey[100],
    },
    text: {
      primary: grey[800],
      secondary: "#FFF",
    }
  },
});

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Home />
    </ThemeProvider>
  )
}

export default App
