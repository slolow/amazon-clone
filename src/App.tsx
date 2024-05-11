import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blue, orange, grey } from '@mui/material/colors';
import './App.css'
import { Home } from './pages/Home';
import { Checkout } from './pages/Checkout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './pages/Layout';
import { reducer, initialState } from './data_layer/reducer';
import { StateProvider } from './data_layer/StateProvider';

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

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/checkout",
        element: <Checkout />
      }
    ]
  }
]);

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <StateProvider reducer={reducer} initialState={initialState}>
        <RouterProvider router={router} />
      </StateProvider>
    </ThemeProvider>
  )
}

export default App
