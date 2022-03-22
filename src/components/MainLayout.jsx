import React from 'react'
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles(theme=>(
    {
        bg_color : {
            backgroundColor : "#030E53",
            width : "100vw",
            height : "100vh"
        }
    }
))

const MainLayout = ({children}) => {
    const classes = useStyles()
  return (
    <div className={classes.bg_color}>
        {children}
    </div>
  )
}

export default MainLayout