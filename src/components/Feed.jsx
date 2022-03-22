import React from 'react'

import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme)=>(
    {
        feed : {
            color : '#fff'
        }
    }
))

const Feed = () => {

    const classes = useStyles()

  return (
    <div className={classes.feed}>
        Feed    
    </div>
  )
}

export default Feed