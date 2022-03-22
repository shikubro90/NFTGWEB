import React from 'react'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme)=>(
    {
        leftBar : {
            color : '#fff'
        }
    }
))



const LeftBar = () => {

    const classes = useStyles()

  return (
    <div className={classes.leftBar}>
        LeftBar
    </div>
  )
}

export default LeftBar