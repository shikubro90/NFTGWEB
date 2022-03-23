import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import { makeStyles } from '@mui/styles';
import brandLogo from '../img/Group-1.png'
import Box  from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import { Button, Card, CardActions, CardContent, CardMedia, ListItem, Typography } from '@mui/material';
import { fontSize } from '@mui/system';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';



const useStyles = makeStyles((theme)=>(
    {
        leftBar : {
            color : '#fff',
            padding : "20px 20px",
        },
        content : {
            backgroundColor : "#8C4AF2",
            borderRadius : "30px 30px 0 0"
        },
        card : {
            background : "#6C14B9 !important",
            width : '100%',
            display : 'flex',
            flexFlow : 'column',
            alignItems : 'center',
            borderRadius : '30px !important',
            
        },
        detailsCard : {
            backgroundColor : 'none !important'
        },
        cardMedia : {
            height : "47px !important",
            width : "51.75px !important",
            padding : '15px 0px !important'
        },
        cardTypography : {
            color : '#fff',
            fontSize : "14px !important",
        },
        settingsTypography : {
            padding : "10px 20px",
            fontSize : '14px !important',

        }
    }
))

const LeftBar = () => {

    const classes = useStyles()

  return (
    <div className={classes.leftBar}>
    
        <div className={classes.content}>
            <Card  className={classes.card}>
                <CardMedia className={classes.cardMedia}
                    component="img"
                    image={brandLogo}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography  variant="h5" className={classes.cardTypography}>
                        Image Layers
                    </Typography>
                </CardContent>
            </Card>

            <List>
               <ListItemButton>
                    <ListItemIcon>
                        <SettingsApplicationsIcon sx={{color : '#fff', fontSize : '35px'}}/>
                    </ListItemIcon>
                    <ListItemText>
                        Settings
                    </ListItemText>
               </ListItemButton>
            </List>

        </div>

    </div>
  )
}

export default LeftBar