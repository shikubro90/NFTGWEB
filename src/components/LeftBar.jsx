import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import { makeStyles } from '@mui/styles';
import brandLogo from '../img/Group-1.png'
import { Avatar, Box, Card, CardContent, CardMedia, IconButton, ListItem, ListItemAvatar, Typography } from '@mui/material';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import { FixedSizeList } from 'react-window';
import Rarity from './Rarity';
import styled from '@emotion/styled';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';






const useStyles = makeStyles((theme)=>(
    {
        leftBar : {
            color : '#fff',
            padding : "20px 20px",
        },
        content : {
            backgroundColor : "#6E56F6",
            borderRadius : "30px 30px 30px 30px",
            paddingBottom : '40px'
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

        },
        
        
    }
))

const LeftBar = () => {

    const classes = useStyles()

    //generate row function comme
    function generate(element) {
        return [0, 1, 2].map((value) =>
          React.cloneElement(element, {
            key: value,
          }),
        );
    }

    const Demo = styled('div')(({ theme }) => ({
        backgroundColor: theme.palette.background.secondary,
      }));

    const dirHandler = (e) => {
        console.log(e.target.files)
    }



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
            
            <Demo>
            <List >

              {generate(
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Elements Name"
                    
                  />
                </ListItem>,
              )}

            </List>
          </Demo>
          {/* //directory="" webkitdirectory="" mozdirectory="" */}
          <input  directory="" webkitdirectory="" mozdirectory="" type="file" onChange={dirHandler} multiple /> 
        </div>

        <Rarity/>

    </div>
  )
}

export default LeftBar