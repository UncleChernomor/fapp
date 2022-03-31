// import { ThemeProvider } from '@mui/styles';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
// import theme from './theme';
// import { createTheme } from '@mui/material/styles';

// const theme = createTheme({
//   palette: {
//     info: {
//       main: "#000000",
//     },
//   }
// });

// export default theme;


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

