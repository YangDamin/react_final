import React from 'react';
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import VideoList from '../Video/VideoList';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(14),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));


const Body = () => {
    return (
      <>
        <CssBaseline />
        <Container className="content-container" fixed>
          <Box
            sx={{
              bgcolor: "rgba(238, 238, 238, 1)",
              borderRadius: "40px 40px 0 0",
              borderWidth: "thin",
              borderStyle: "solid",
              borderColor: "rgba(153, 153, 153, 1)",
              height: "130vh",
            }}
          >
            <VideoList></VideoList>
          </Box>
        </Container>
      </>
    );
}

export default Body;

