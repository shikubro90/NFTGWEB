import { Box, Button } from '@mui/material'
import React from 'react'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';

const Upload = () => {

    const dirHandeler= (e)=>{
        e.preventDefault();
        let value = URL.createObjectURL(e.target.files[0])
        // console.log(e.target.files[0])
        console.log(value)

    }

  return (
    <div>

        <Box>
        <Button
            variant="contained"
            component="label"
            sx={{color : "#fff"}}
            >
            <DriveFolderUploadIcon sx={{marginRight : '10px'}} />
            <input  directory="" webkitdirectory="" mozdirectory="" type="file" onChange={dirHandeler} hidden  /> 
                Add Layer
            </Button>
        </Box>

    </div>
  )
}

export default Upload