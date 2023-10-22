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
                    ShowRemaining();
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

function ShowRemaining() {
    // const [budget, setBudget] = useState(' ');
    // const [date, setDate] = useState(' ');
    // const [hours, setHours] = useState(false);
    // const [budgetError, setBudgetError] = useState(false);
    // const [dateError, setDateError] = useState(false);
    // const [hoursError, setHoursError] = useState(false);
    // const handleSubmit = (e) => {
    //     e.preventDefault()

    //     setBudgetError(false)
    //     setDateError(false)
    //     setHoursError(false)
    //     if(budget === ' '){
    //         setBudgetError(true)
    //     }
    //     if(date === ' '){
    //         setDateError(true)
    //     }
    //     if(hours === ' '){
    //         setHoursError(true)
    //     }
    // }
    const element = (
        <div className="Title">
          <header className="Title-header">
            <p>
            {/* <form noValidate autoComplete = "off" onSubmit={handleSubmit}> */}
                <p>
                <h1>
                    Enter Budget Estimate:    
                <TextField 
                    // onChange={(e) => setBudget(e.target.value)}
                    id="filled-basic" 
                    label="($1000-)" 
                    variant="filled" 
                    required
                    // error = {budgetError}
                    /> 
                </h1>
                <h1>
                    Enter Wedding Day:    
                
                <TextField 
                    // onChange={(e) => setDate(e.target.value)}
                    id="filled-basic" 
                    label="(MM/DD/YYYY)" 
                    variant="filled" 
                    required
                    // error = {dateError}
                    />
                </h1>
                <h1>
                    How many hours per week are you willing to spend?    
                <TextField 
                    // onChange={(e) => setHours(e.target.value)}
                    id="filled-basic" 
                    label="(0-24)" 
                    variant="filled" 
                    required
                    // error = {hoursError}
                    /> 
                </h1>
                </p>
                <p>
                <h1>
                    Choose wedding setting:
                </h1>
                <img src={outdoorindoor} className="inoutpic" alt="archPic" />
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
                color = "success"
                variant = "contained"
                endIcon = {<KeyboardDoubleArrowRightIcon/>}
            > Done </Button>
            {/* // </form> */}
            </p>
          </header>
        </div>
    )
    root.render(element)
}

export default Title;