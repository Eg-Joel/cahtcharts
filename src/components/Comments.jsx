import {
  Box,
  Avatar,
  IconButton,
  Typography,
  Button,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import ProfilePicture from "/profile.png";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SendIcon from "@mui/icons-material/Send";

function Comments() {
  const [showInput, setShowInput] = useState(false);
  const [replyInput, setReplyInput] = useState("");
  const [input, setInput] = useState("");
  const [commentsData,setCommentsData] = useState([])
  

 
  const handleReply = () => {
    setShowInput(true);
  };


  const handleAddReply = (parentId) => {
    const newComment = {
      id: Date.now(),
      name: "New User",
      data: replyInput,
    };
    const updatedComments = commentsData.map((comment) => {
      if (comment.id === parentId) {
        return {
          ...comment,
          items: [...(comment.items || []), newComment],
        };
      }
      return comment;
    });
    setCommentsData(updatedComments)
    setShowInput(false);
    setReplyInput("");
  };

  const handleComment = () => {
    const newComment = {
      id: Date.now(),
      name: "New User",
      data: input,
      items: [], 
    };
    console.log(newComment);
    const updatedComments = [...commentsData, newComment];
    console.log(updatedComments);
    setCommentsData(updatedComments)
    setInput("");
  };

  return (
    <div>
     
      <Box
        sx={{
          marginTop: 1,
          backgroundColor: "#f9f9f9",
          padding: 2,
          borderRadius: 5,
        }}
      >
         {Array.isArray(commentsData) &&
         commentsData.map((comment) => (
        <Box key={comment.id}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
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
                sx={{
                  marginRight: 1,
                  height: 35,
                  width: 35,
                }}
              />
              <Typography variant="h6" sx={{ margin: 0 }}>
                {comment?.name}
              </Typography>
              <Typography
                variant="body1"
                color="gray"
                sx={{ margin: 0, fontSize: 13 }}
              >
                1min ago
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
                <MoreVertIcon />
              </IconButton>
            </Box>
          </Box>
          <Box
            sx={{
              paddingLeft: 5,
            }}
          >
            <Box
              sx={{
                backgroundColor: "#f6ebe3",
                borderRadius: "0px 30px 30px 30px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 2,
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  wordWrap: "break-word",
                }}
              >
                {comment?.data}
              </Typography>
              <Button
                sx={{
                  color: "#e7ad99",
                }}
                onClick={() => handleReply(comment?.id)}
              >
                reply
              </Button>
            </Box>
          </Box>
          {showInput && (
        <Box sx={{ marginTop: 2 }}>
          <TextField
            placeholder="write a comment"
            fullWidth
            value={replyInput}
            onChange={(e) => setReplyInput(e.target.value)}
            InputProps={{
              startAdornment: (
                <Avatar
                  alt="User"
                  src={ProfilePicture}
                  sx={{
                    marginRight: 1,
                    height: "100%",
                    width: "auto"
                  }}
                />
              ),
              endAdornment: (
                <IconButton
                onClick={() => handleAddReply(comment?.id)}
                  sx={{
                    color: "#e7ad99"
                  }}
                >
                  <SendIcon />
                </IconButton>
              ),
              sx: {
                borderRadius: "30px",
                backgroundColor: "#f6ebe3",
                height: "55px",
                padding: 0
              },
            }}
          />
        </Box>
      )}
     
        </Box>
        ))}
        <Box
          sx={{
            marginTop: 2,
          }}
        >
          <TextField
            placeholder="write a comment"
            fullWidth
            value={input}
            onChange={(e) => setInput(e.target.value)}
            InputProps={{
              startAdornment: (
                <Avatar
                  alt="User"
                  src={ProfilePicture}
                  sx={{
                    marginRight: 1,
                    height: "100%",
                    width: "auto",
                  }}
                />
              ),
              endAdornment: (
                <IconButton
                  onClick={handleComment}
                  sx={{
                    color: "#e7ad99",
                  }}
                >
                  <SendIcon />
                </IconButton>
              ),
              sx: {
                borderRadius: "30px",
                backgroundColor: "#f6ebe3",
                height: "55px",

                padding: 0,
              },
            }}
          />
        </Box>
      </Box>
      
    </div>
  );
}

export default Comments;
