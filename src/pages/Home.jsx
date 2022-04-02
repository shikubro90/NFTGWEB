import Grid from '@mui/material/Grid'
import { makeStyles } from '@mui/styles'
import React from 'react'
import Feed from '../components/Feed'
import LeftBar from '../components/LeftBar'
import RightBar from '../components/RightBar'






const useStyles = makeStyles((theme)=>(
    {

        container : {
            // height : '100vh'
        }

    }
));


const Home = () => {

    const classes = useStyles()
    
  return (
    <Grid container className={classes.container} spacing={2}>

        <Grid item xs={12} sm={2} md={2} lg={2}>
            <LeftBar />
        </Grid>

        <Grid item xs={12} sm={7} md={7} lg={7}>
            {/* <NavBar/> */}
            <Feed />
        </Grid>

        <Grid item xs={12} sm={3} md={3} lg={3}>
            <RightBar />
        </Grid>
    </Grid>

  )
}

export default Home