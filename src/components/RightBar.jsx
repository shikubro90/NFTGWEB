import React, { useEffect, useState } from 'react'

import { makeStyles } from '@mui/styles'
import { Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'

import imageItems from '../helpers/dbHelper/imageList'

const useStyles = makeStyles((theme)=>(
    {
        rightBar : {
            
        },
        recentGenerate : {
            background : '#7952F5',
            borderRadius: '20px',
        },
        paper : {
            backgroundColor : '#854DF1 !important',
            borderRadius : "50px !important",
            marginTop : '25px',
            padding : '10px',
        },
        boxStyle: {
            backgroundColor : '#7952F5',
            borderRadius : "50px !important",
            margin: '5px auto',
            padding: '50px',
        },
        imgStyle : {
            width : '100%',
            height : '100%',
        },
        typographyStyles : {
            color : '#fff !important',
        }

    }
))

const RightBar = () => {
    const classes = useStyles()
    const [imageObj, setImageObj] = useState([])

    useEffect(() => {
        setInterval(() => {
            setImageObj(imageItems[Math.floor(Math.random() * imageItems.length)])
        }, 1000)
    },[])

  return (
    <div className={classes.rightBar}>
        <Box className={classes.recentGenerate}>
            <Paper className={classes.paper} elevation={3}>
                <Typography className={ classes.typographyStyles }>
                Running Generate Showing
                </Typography>
            </Paper>

            <Box className = { classes.boxStyle} >
                <img
                    className={classes.imgStyle}
                    src={imageObj.img}
                    srcSet={`${imageObj.img} 2x, ${imageObj.img} 3x`}
                    alt= {`${imageObj.title}`}
                    loading="lazy"
                />
            </Box>
        </Box>
    </div>
  )
}

export default RightBar