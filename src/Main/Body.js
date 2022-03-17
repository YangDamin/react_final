import React from 'react';
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

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
      <Container className="content-container" >
        <Box sx={{ bgcolor: 'rgba(238, 238, 238, 1)',borderRadius:'40px 40px 0 0',borderStyle:'solid',borderColor:'rgba(153, 153, 153, 1)', height: '100vh' }}>
      <Box sx={{ flexGrow: 1,mt:6 }}>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Item >video1</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>video2</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>video3</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>video4</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>video5</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>video6</Item>
          </Grid>
        </Grid>
      </Box>
      </Box>
      </Container>
    </>
    );
}

export default Body;

