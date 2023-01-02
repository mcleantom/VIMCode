import React from 'react';
import './App.css';
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/keybinding-vim";
import { Box, AppBar, Grid, styled, Paper, createTheme, ThemeProvider, Typography, List, ListItem } from '@mui/material';

function onChange(newValue) {
  console.log("change", newValue);
}

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  padding: theme.spacing(0),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

let theme = createTheme();

const Div = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1)
}));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <AppBar component="nav" position="sticky">
          Nav Bar
        </AppBar>
        <Box component="main" sx={{ height:'100%' }}>
          <Grid container spacing={0}>
            <Grid item xs={4}>
              <Div>
                <Typography varient="h4" gutterBottom>
                  1. Hello World!
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Welcome to VIMCode. This is the first problem! You can use this problem to learn how the website works, and if you havent learned VIM before,
                  learn how VIM works!<br/><br/>
                  For this problem, modify the function to print the phrase "Hello World!", then save the document.
                  <List sx={{ listStyleType: 'disc', pl: 4 }}>
                    <ListItem sx={{ display: 'list-item' }}>i to enter INSERT mode.</ListItem>
                    <ListItem sx={{ display: 'list-item' }}>CTRL+[ to enter COMMAND mode</ListItem>
                    <ListItem sx={{ display: 'list-item' }}>:w within COMMAND mode to save</ListItem>
                  </List>
                </Typography>
              </Div>
            </Grid>
            <Grid item xs={8}  sx={{ height:'100%' }}>
              <Item>
                <AceEditor
                  mode="python"
                  theme="github"
                  onChange={onChange}
                  name="UNIQUE_ID_OF_DIV"
                  keyboardHandler="vim"
                  defaultValue={`def console_log():
            print("")`}
                  width='100%'
                ></AceEditor>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
