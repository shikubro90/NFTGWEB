import React, {useEffect, useState} from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { makeStyles } from '@mui/styles'
import imageItems from '../helpers/dbHelper/imageList';

import { Paper, Typography } from '@mui/material';

const useStyles = makeStyles((theme)=>(
    {
        feed : {
            background : '#6D56F6',
            borderRadius : '20px',
            
        },
        paper : {
            backgroundColor : '#854DF1 !important',
            borderRadius : "50px !important",
            marginTop : '25px',
        },
        
    }
))

const Feed = () => {
    
    const classes = useStyles()
    const [imageArray, setImageArray] = useState([]);
    //create objects inside an arry which contain img and title

    useEffect(() => {
        // randomize imageItems
        setInterval(() => {
            setImageArray(imageItems.sort(() => Math.random() - 0.5))
        }, 1000)
        // const randomizeImageItems = () => {
        //     const randomImageItems = imageItems.sort(() => Math.random() - 0.5);
        //     setImageArray(randomImageItems);
        // }
    },[])

  return (
    <div className={classes.feed}>
        <Paper className={classes.paper} elevation={1}>
            <Typography sx={{padding : "12px", color : '#fff'}}>
            Generated NFT preview...
            </Typography>

        </Paper>
        <ImageList  cols={5} sx={{maxHeight : '750px', }} className={classes.imageList}>
            {imageArray.map((item, index) => (
                <ImageListItem key={item.img} >
                <img 
                    src={item.img}
                    title={item.title}
                    alt={item.title}
                    loading="lazy"
                />
                </ImageListItem>
            ))}
        </ImageList>
    </div>
  )
}

export default Feed