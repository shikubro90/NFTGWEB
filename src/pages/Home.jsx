import React from 'react'


import LeftBar from '../components/LeftBar'
import RightBar from '../components/RightBar'
import Feed from '../components/Feed'
import Grid from '@mui/material/Grid'



import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme)=>(
    {
        container : {
            height : '100vh'
        }
    }
));


const Home = () => {

    const classes = useStyles()
    
  return (
    <Grid container spacing={24} className={classes.container}>

        <Grid item sm={3} xs={2}>
            <LeftBar />
        </Grid>

        <Grid item sm={5} xs={10}>
            {/* <NavBar/> */}
            <Feed />
        </Grid>

        <Grid item sm={4}>
            <RightBar />
        </Grid>
    </Grid>

  )
}

export default Home