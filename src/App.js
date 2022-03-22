import React from "react";
import MainLayout from "./components/MainLayout";
import Home from "./pages/Home";
import Dashboard from "./components/Dashboard";

import { makeStyles } from '@mui/styles';
import { ThemeProvider } from '@mui/material/styles';
import {theme} from './components/Theme'

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
        {/* <Home/> */}
        <Dashboard/>
      </MainLayout>
      </ThemeProvider>
    </div>
  );
}

export default App;
