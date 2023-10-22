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
    return (
        <div className="Data">
          <header className="Data-header">
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
                <img src={outdoorindoor} className="inoutpic" alt="inoutpic" />
                </p>
                <Stack spacing = {60} direction = 'row' justifyContent= "center">
                <Button
                    style={{
                        backgroundColor: "#758467"
                    }}
                    // color = "buttonColor"
                    variant = "contained"
            > Outdoor </Button>
            <Button
                style={{
                    backgroundColor: "#758467"
                }}
                // color = "buttonColor"
                variant = "contained"
            > Indoor </Button>
            </Stack>
            <Link to = "/cart">
            <Button
                style={{
                    backgroundColor: "#758467"
                }}
                // color = "buttonColor"
                variant = "contained"
                endIcon = {<KeyboardDoubleArrowRightIcon/>}
            > Done </Button>
            </Link>
            {/* // </form> */}
            </p>
          </header>
        </div>
    )
}

export default Data;