import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import { makeStyles } from '@mui/styles';
import brandLogo from '../img/Group-1.png'
import { Box, Card, CardContent, CardMedia, ListItem, Typography } from '@mui/material';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import { FixedSizeList } from 'react-window';



const useStyles = makeStyles((theme)=>(
    {
        leftBar : {
            color : '#fff',
            padding : "20px 20px",
        },
        content : {
            backgroundColor : "#8C4AF2",
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

        }
    }
))

const LeftBar = () => {

    const classes = useStyles()


    function renderRow(props) {
        const { index, style } = props;
      
        return (
          <ListItem style={style} key={index} component="div" disablePadding>
            <ListItemButton>
              <ListItemText primary={`Item ${index + 1}`} />
            </ListItemButton>
          </ListItem>
        );
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
            

            <Box
                sx={{ width: '100%', height: 400, maxWidth: 360,  }}
                >
                <FixedSizeList
                    height={400}
                    itemSize={46}
                    itemCount={200}
                    overscanCount={5}
                >
                    {renderRow}

                </FixedSizeList>
            </Box>
            
        </div>

    </div>
  )
}

export default LeftBar