import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blue, orange, grey } from '@mui/material/colors';
import './App.css'
import { Header } from './components/Header';

const theme = createTheme({
  palette: {
    primary: {
      main: blue[900],
    },
    secondary: {
      main: orange[700],
    },
    text: {
      primary: grey[600],
      secondary: "#FFF",
    }
  },
});

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  )
}

export default App
