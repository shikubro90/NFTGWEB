import { Grid, List, ListItem, ListItemText, styled, Typography } from '@mui/material'
import React, { useState } from 'react'
import { makeStyles } from '@mui/styles/'
import  Box  from '@mui/system/Box'
import Slider from '@mui/material/Slider'
import MuiInput from '@mui/material/Input';


const Input = styled(MuiInput)`
    width : 50px
`;


const useStyles = makeStyles((theme)=>(
    {   bgColor : {
            backgroundColor : "#fff",
            
        },
        content : {
            backgroundColor : "#6E56F6",
            borderRadius : "30px 30px 30px 30px",
            paddingBottom : '40px',
            marginTop : "20px"
        },
        cardTypography : {
            fontSize : "14px"
        },
        sliderContent : {
            padding : "0px 20px"
        }
    }
)) 


const Rarity = () => {

    const classes = useStyles()
    //slider value backgournd Rarity
    const [valueOfBackground, setBackgroundValue] = useState(30)
    //slider image rarity 
    const [valueOfImageRarity, setValueOfImageRarity] = useState(50)


    //Slider functions
    const handleSliderChange = (event, newValue) => {
        
        setBackgroundValue(newValue);
    };

    const handleInputChange = (event) => {
        setBackgroundValue(event.target.value === '' ? '' : Number(event.target.value));
    };

    const handleBlur = () => {

        if (valueOfBackground < 0) {
            setBackgroundValue(0);
        } else if (valueOfBackground > 100) {
            setBackgroundValue(100);
        }

    };


    


    




  return (

    <div className={classes.content}>
        <Box className={classes.sliderContent}>
            <List>
                <ListItem>
                    <ListItemText>
                        <Typography  variant="h6" className={classes.cardTypography}>
                            Image Layers
                        </Typography>
                    </ListItemText>
                </ListItem>

                <ListItem>
                    <ListItemText>
                        <Typography  variant="h6" className={classes.cardTypography}>
                            Backgournd
                        </Typography>
                    </ListItemText>
                </ListItem>
            </List>

            {/* backgournd Rarity */}

            <Box >
                <Typography>
                    Background Rarity
                </Typography>
                {/* Slider content */}
                <Grid container spacing={2} alignItems='center'>
                    <Grid item >
                        <Input className={classes.bgColor}
                        value={valueOfBackground}
                        size="small"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        inputProps={{
                        step: 10,
                        min: 0,
                        max: 100,
                        type: 'number',
                        'aria-labelledby': 'input-slider',
                        }}
                        /> %
                    </Grid>

                    <Grid item xs>
                        <Slider
                        value={typeof valueOfBackground === 'number' ? valueOfBackground : 0}
                        onChange={handleSliderChange}
                        aria-labelledby="input-slider"
                        >
                        </Slider>
                    </Grid>
                </Grid>
            </Box>


            {/* image rarity */}
            
        </Box>
        
    </div>

  )
}

export default Rarity