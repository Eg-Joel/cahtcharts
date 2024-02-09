import React from "react";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

function ImageUpload() {
  return (
    <div>
      <Paper
          elevation={2}
          
        >
      <Card
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100% ",
          background: `url('uploadImg.png')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          height:"35vh"
        }}
      >
        <CardContent>
          {/* <Box sx={{ position: 'relative', marginBottom: '20px',display: 'flex', justifyContent: 'center' }}>
          <Box
            sx={{
             
               
              borderTop: '2px solid #ff7777',
              borderRight: '2px solid #ff7777',
              width: '10px',
              height: '10px',
              borderRadius: '0 30px 0 0',
              padding:"1px"
            }}
          />
          
        
        
        <Box sx={{ position: 'relative' }}>
          <Box
            sx={{
             
              borderTop: '2px solid #ff7777',
              borderRight: '2px solid #ff7777',
              width: '10px',
              height: '10px',
              borderRadius: '0 25px 0 0',
            }}
          />
         
        </Box> */}
          {/* </Box> */}
          <Button variant="contained" 
          sx={{
            height: 45,
            width:300,
            color: "white",
            backgroundColor: "#e7ad99",
            borderRadius: "30px",
            border: "2px solid #e7ad99",
            "&:hover": {
              backgroundColor: "#eb8765",
              color: "white",
            },
          }}>
            Upload Image
          </Button>
        </CardContent>
      </Card>
      </Paper>
    </div>
  );
}

export default ImageUpload;
