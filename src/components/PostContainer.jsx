import {
  Box,
  Paper,
  Typography,
  Button,
  Avatar,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ProfilePicture from "/profile.png";
import Comments from "./Comments";

function PostContainer({ posts }) {
  const [liked, setLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  const handleCommentClick = () => {
    setShowComments(true);
  };

  return (
    <div>
      <Box
        sx={{
          marginTop: 2,
        }}
      >
        <Paper
          elevation={2}
          sx={{
            padding: 3,
          }}
        >
          {posts.map((post, index) => (
            <>
              <Box
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 2,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                  }}
                >
                  <Avatar
                    alt="User"
                    src={post.userProfilePic || ProfilePicture}
                    sx={{
                      marginRight: 1,
                      height: 45,
                      width: 45,
                      border: "4px solid #e7ad99",
                    }}
                  />
                  <Box sx={{ marginLeft: 1 }}>
                    <Typography variant="h6" sx={{ margin: 0 }}>
                      {post.userName || "User"}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="gray"
                      sx={{ margin: 0, fontSize: 13 }}
                    >
                      1 Day ago
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <Button
                    variant="outlined"
                    sx={{
                      height: 35,
                      borderColor: "red",
                      color: "red",
                    }}
                  >
                    Report
                  </Button>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography variant="body1" color="gray">
                    {post.postDescription || "No description"}
                  </Typography>
                </Box>
                <Box>
                  <IconButton
                    size="small"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="inherit"
                  >
                    <AddCircleIcon />
                  </IconButton>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  marginTop: 2,
                  marginBottom: 2,
                }}
              >
                <img
                  src={post.postImage || "postImg1.png"}
                  alt=""
                  height={500}
                  width={"100%"}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Avatar
                    alt="User"
                    src={ProfilePicture}
                    sx={{ marginRight: -3 }}
                  />
                  <Avatar
                    alt="User"
                    src={ProfilePicture}
                    sx={{ marginRight: -3 }}
                  />
                  <Avatar alt="User" src={post.userProfilePic || ProfilePicture} />
                  <Typography
                    variant="body1"
                    color="gray"
                    fontSize={17}
                    sx={{ marginLeft: 3 }}
                  >
                    you and bob likes
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h6">comments</Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  marginTop: 2,
                }}
              >
                {liked ? (
                  <Button
                    variant="contained"
                    sx={{
                      height: 45,
                      width: "50%",
                      color: "white",
                      backgroundColor: "#e7ad99",
                      borderRadius: "30px",
                      border: "2px solid #e7ad99",
                      "&:hover": {
                        backgroundColor: "#eb8765",
                        color: "white",
                      },
                    }}
                    onClick={handleLikeClick}
                  >
                    Liked
                  </Button>
                ) : (
                  <Button
                    variant="outlined"
                    sx={{
                      height: 45,
                      width: "50%",
                      color: "#e7ad99",
                      borderRadius: "30px",
                      border: "2px solid #e7ad99",
                      "&:hover": {
                        backgroundColor: "#eb8765",
                        color: "white",
                      },
                    }}
                    onClick={handleLikeClick}
                  >
                    Like
                  </Button>
                )}

                <Button
                  sx={{
                    height: 45,
                    width: "50%",
                    color: "white",
                    backgroundColor: "#e7ad99",
                    borderRadius: "30px",
                    border: "2px solid white",
                    "&:hover": {
                      backgroundColor: "#eb8765",
                    },
                  }}
                  onClick={handleCommentClick}
                >
                  Comment
                </Button>
              </Box>
              <Box>{showComments && <Comments />}</Box>
            </>
          ))}
        </Paper>
      </Box>
    </div>
  );
}

export default PostContainer;
