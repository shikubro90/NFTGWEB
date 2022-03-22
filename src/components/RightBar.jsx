import React from 'react'

import { makeStyles } from '@mui/styles'
const useStyles = makeStyles((theme)=>(
    {
        rightBar : {
            color : '#fff'
        }
    }
))

const RightBar = () => {
    const classes = useStyles()

  return (
    <div className={classes.rightBar}>
        RightBar
    </div>
  )
}

export default RightBar