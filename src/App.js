import { ThemeProvider } from 'styled-components';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/router';



function App(theme) {
  return (
    <>
  
     <ThemeProvider theme={theme}>
        <globalStyle />
        <RouterProvider router={router}/>
      </ThemeProvider>
     
    </>
  );
}

export default App;
