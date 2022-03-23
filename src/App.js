import { ThemeProvider } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import React from "react";
import MainLayout from "./components/MainLayout";
import { theme } from './components/Theme';
import Home from "./pages/Home";


const useStyles = makeStyles((theme)=>(
  {
    
  }
))

function App() {

  const classes = useStyles()

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <MainLayout>
        <Home/>
        {/* <Dashboard/> */}
      </MainLayout>
      </ThemeProvider>
    </div>
  );
}

export default App;
