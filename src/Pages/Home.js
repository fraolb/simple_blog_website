import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Stack,
  Typography,
  Link,
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";

const Home = () => {
  const data = [
    {
      id: 1,
      name: "blog 1",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in egestas lectus. Vivamus bibendum tortor nisi, vitae fermentum eros varius quis. Sed enim leo, pulvinar et ante in, pellentesque tempor sapien. ",
    },
    {
      id: 2,
      name: "blog 2",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in egestas lectus. Vivamus bibendum tortor nisi, vitae fermentum eros varius quis. Sed enim leo, pulvinar et ante in, pellentesque tempor sapien. ",
    },
    {
      id: 3,
      name: "blog 3",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in egestas lectus. Vivamus bibendum tortor nisi, vitae fermentum eros varius quis. Sed enim leo, pulvinar et ante in, pellentesque tempor sapien. ",
    },
    {
      id: 4,
      name: "blog 4",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in egestas lectus. Vivamus bibendum tortor nisi, vitae fermentum eros varius quis. Sed enim leo, pulvinar et ante in, pellentesque tempor sapien. ",
    },
    {
      id: 5,
      name: "blog 5",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in egestas lectus. Vivamus bibendum tortor nisi, vitae fermentum eros varius quis. Sed enim leo, pulvinar et ante in, pellentesque tempor sapien. ",
    },
    {
      id: 6,
      name: "blog 6",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in egestas lectus. Vivamus bibendum tortor nisi, vitae fermentum eros varius quis. Sed enim leo, pulvinar et ante in, pellentesque tempor sapien. ",
    },
    {
      id: 7,
      name: "blog 7",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in egestas lectus. Vivamus bibendum tortor nisi, vitae fermentum eros varius quis. Sed enim leo, pulvinar et ante in, pellentesque tempor sapien. ",
    },
    {
      id: 8,
      name: "blog 8",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in egestas lectus. Vivamus bibendum tortor nisi, vitae fermentum eros varius quis. Sed enim leo, pulvinar et ante in, pellentesque tempor sapien. ",
    },
    {
      id: 9,
      name: "blog 9",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in egestas lectus. Vivamus bibendum tortor nisi, vitae fermentum eros varius quis. Sed enim leo, pulvinar et ante in, pellentesque tempor sapien. ",
    },
  ];
  const [anchor, setAnchor] = useState(null);
  const handleClose = () => {
    setAnchor(null);
  };
  const handleMenu = (e) => {
    setAnchor(e.currentTarget);
  };
  return (
    <Box>
      <Box>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              My Blog Website
            </Typography>
            <Box>
              <IconButton size="large" color="inherit" onClick={handleMenu}>
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorE1={anchor}
                keepMounted
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical:'top',
                  horizontal:"right"
                }}
                open={Boolean(anchor)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My Account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Box>
        <Container>
          <Typography
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            MY Blog Website
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in
            egestas lectus. Vivamus bibendum tortor nisi, vitae fermentum eros
            varius quis.
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button variant="contained">Popular Blogs</Button>
            <Button variant="outlined">New Blogs</Button>
          </Stack>
        </Container>
      </Box>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
          {data.map((i) => (
            <Grid item key={i.id} xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="div"
                  sx={{ pt: "56.25%" }}
                  image="https://source.unsplash.com/random?wallpapers"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    {i.name}
                  </Typography>
                  <Typography>{i.text}</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">View</Button>
                  <Button size="small">Share</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Blog Footer
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          Copyright @{" "}
          <Link color="inherit" href="#">
            My Website
          </Link>{" "}
          {new Date().getFullYear()}
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
