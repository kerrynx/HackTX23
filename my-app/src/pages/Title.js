import './Title.css';
import logo from '../assets/penguin_logo.png';
import outdoorindoor from '../assets/outdoorindoor.png';
import indoor from '../assets/indoor.png';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { ButtonGroup } from '@mui/material';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import ReactDOM from 'react-dom/client';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
const root = ReactDOM.createRoot(document.getElementById('root'));




function Title() {
    return (
        <Box sx={{ bgcolor: 'success.main' }}>
        <div className="Title">
          <header className="Title-header">
            <h1>Welcome to Wedbud</h1>
            <img src={logo} className="Penguin-logo" alt="logo" />
            <p>
            <Button
                onClick={() => {
                    showBudget();
                }}
                color = "success"
                variant = "contained"
                endIcon = {<KeyboardDoubleArrowRightIcon/>}
            > Get Started </Button>
            </p>
          </header>
        </div>
        </Box>
      );
}



function showBudget() {
    const element = (
        <div className="Title">
          <header className="Title-header">
            <p>
                <p>
                <h1>
                    Enter Budget Estimate:    
                <TextField id="filled-basic" label="($1000-)" variant="filled" /> 
                </h1>
                <h1>
                    Enter Wedding Day:    
                
                <TextField id="filled-basic" label="(MM/DD/YYYY)" variant="filled" /> 
                </h1>
                <h1>
                    How many hours per week are you willing to spend?    
                
                <TextField id="filled-basic" label="(1-24)" variant="filled" /> 
                </h1>
                </p>
                <p>
                <h1>
                    Choose wedding setting:
                </h1>
                <img src={outdoorindoor} className="Penguin-logo" alt="archPic" />
                {/* <img src={indoor} className="Penguin-logo" alt="indoor" /> */}
                </p>
                <Stack spacing = {60} direction = 'row' justifyContent= "center">
                <Button
                color = "success"
                variant = "contained"
            > Outdoor </Button>
            <Button
                color = "success"
                variant = "contained"
            > Indoor </Button>
            </Stack>
            <Button
                // onClick={() => {
                //     showBudget();
                // }}
                color = "success"
                variant = "contained"
                endIcon = {<KeyboardDoubleArrowRightIcon/>}
            > Done </Button>
            </p>
          </header>
        </div>
    )
    root.render(element)
}

export default Title;