import './Data.css';
import outdoorindoor from '../assets/outdoorindoor.png';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import ReactDOM from 'react-dom/client';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Routes, Route, Outlet, Link } from "react-router-dom";


// const root = ReactDOM.createRoot(document.getElementById('root'));
function Data(){
    const [budget, setBudget] = useState('')
    const [date, setDate] = useState('')
    const [hours, setHours] = useState('')
    // const [budgetError, setBudgetError] = useState(false)
    // const [dateError, setDateError] = useState(false)
    // const [hoursError, setHoursError] = useState(false)

    // const handleSubmit = (e) => {
    //     e.preventDefault()

    //     setBudgetError(false)
    //     setDateError(false)
    //     setHoursError(false)
    //     if(budget == ''){
    //         setBudgetError(true)
    //     }
    //     if(date == ''){
    //         setDateError(true)
    //     }
    //     if(hours == ''){
    //         setHoursError(true)
    //     }
    // }
    return (
        <div className="Data">
          <header className="Data-header">
            <p>
            {/* <form noValidate autoComplete = "off" onSubmit={handleSubmit}> */}
                <p>
                <Stack spacing = {2} direction = 'row' justifyContent= "center">
                    <h1>
                    Enter Budget Estimate: 
                    </h1>   
                <TextField 
                    sx={{
                        input: {color: "#FFFFFF"},
                        width: 100,
                        fontFamily: 'Bentham'
                    }}
                    InputProps={{
                        inputProps: { 
                            min: 1000
                        }
                    }}
                    value ={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    id="filled-basic" 
                    type = "number"
                    label="($1000-)" 
                    variant="filled" 
                    required
                    error = {!budget}
                    /> 
                </Stack>
                </p>
                <p>
                <Stack spacing = {2} direction = 'row' justifyContent= "center">
                <h1>
                    Enter Wedding Day:   
                    </h1> 
                <TextField 
                    sx={{
                        input: {color: "#FFFFFF"},
                        fontFamily: 'Bentham'
                    }}
                    value ={date}
                    onChange={(e) => setDate(e.target.value)}
                    type="date"
                    id="filled-basic" 
                    // label="(MM/DD/YYYY)" 
                    variant="filled" 
                    required
                    error = {!date}
                    />
                </Stack>
                </p>
                <p>
                <Stack spacing = {2} direction = 'row' justifyContent= "center">
                <h1>
                    How many hours per week are you willing to spend?  
                    </h1>  
                <TextField 
                    sx={{
                        input: {color: "#FFFFFF"},
                        width: 80,
                        fontFamily: 'Bentham'
                    }}
                    
                    InputProps={{
                        inputProps: { 
                            max: 24, min: 0
                        }
                    }}
                    value ={hours}
                    onChange={(e) => setHours(e.target.value)}
                    id="filled-basic" 
                    type = "number"
                    label="(0-24)" 
                    variant="filled" 
                    required
                    error = {!hours}
                    /> 
                </Stack>
                </p>
                <p>
                <h1>
                    Choose wedding setting:
                </h1>
                <img src={outdoorindoor} className="inoutpic" alt="inoutpic" />
                </p>
            <Stack spacing = {60} direction = 'row' justifyContent= "center">
                <Button
                    style={{
                        backgroundColor: "#758467"
                    }}
                    sx={{
                        fontFamily: 'Bentham',
                      }}
                    variant = "contained"
                > Outdoor </Button>
                <Button
                    style={{
                        backgroundColor: "#758467"
                    }}
                    sx={{
                        fontFamily: 'Bentham',
                      }}
                    variant = "contained"
                > Indoor </Button>
            </Stack>
            <Link to = "/cart">
            <Button
                style={{
                    backgroundColor: "#758467"
                }}
                sx={{
                    fontFamily: 'Bentham',
                  }}
                variant = "contained"
                endIcon = {<KeyboardDoubleArrowRightIcon/>}
            > Done </Button>
            </Link>
            {/* </form> */}
            </p>
          </header>
        </div>
    )
}

export default Data;