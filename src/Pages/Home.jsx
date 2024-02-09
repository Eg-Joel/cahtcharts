import { Box } from '@mui/material'
import React from 'react'
import Header from '../components/Header'
import ImageUpload from '../components/ImageUpload'
import PostContainer from '../components/PostContainer'
const postsData = [
  {
    userName: "User1",
    userProfilePic: "profile.png",
    postDescription: "Description1",
    postImage: "postImg1.png",
   
  },
  {
    userName: "user2",
    userProfilePic: "user2.jpg",
    postDescription: "Description2",
    postImage: "post2.jpeg",
    
  },
 
];

function 
Home() {
  return (
    <div>
      <Box
      sx={{
        margin: 0,
        minHeight: "100vh",
        padding: "20px 50px",
      }}>
<Header/>
<ImageUpload/>
<PostContainer posts={postsData}/>
      </Box>
    </div>
  )
}

export default Home