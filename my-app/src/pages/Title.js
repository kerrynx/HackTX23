import './Title.css';
import title from '../assets/titlepage.png';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Routes, Route, Outlet, Link } from "react-router-dom";


function Title() {
    return (
        // <Box sx={{ bgcolor: 'success.main' }}>
        <div className="Title">
          <header className="Title-header">
            {/* <h1>Welcome to Wedbud</h1>
            <img src={logo} className="Penguin-logo" alt="logo" /> */}
            <img src={title} className="title" alt="title" />
            <p>
            <Link to = "/data">
            <Button
                style={{
                    backgroundColor: "#758467"
                }}
                variant = "contained"
                endIcon = {<KeyboardDoubleArrowRightIcon/>}
            > Get Started </Button>
            </Link>
            </p>
          </header>
        </div>
        // </Box>
      );
}

export default Title;