import { Box, Button } from '@mui/material'
import React from 'react'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
// import path from 'path';

//gets your app's root path
// const  root = path.dirname(require.main.filename)


const Upload = () => {

    const dirHandeler= (e)=>{
        e.preventDefault();
        const reader = new FileReader();
        // console.log(e.target.files[0])
        const fileList = Object.values(e.target.files);
        // console.log(fileList)
        fileList.map( async (file)=>{
                reader.onload = (e) => {
            //     // await localStorage.setItem(file.name, e.target.result);
                console.log(e.target.result)
            }
            reader.readAsDataURL(file);
                // console.log(file)
        })
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