import ShopList from './shopping.js';
import CategoryTable from './shop2.js';
import React, { useState } from 'react';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

import '../App.css';
import './Cart.css';


function Cart() {
    
  const invoiceTotal = 25078;


  return (
    <div className="Cart">
      <div className="remaining_rings">
      <Container maxWidth="sm">
      <Box sx={{ my: 5 }}>
        <Typography align = "center" variant="h3" component="h1" gutterBottom>
            Remaining
        </Typography>
      </Box>
        </Container>

      <div class="row">
        <div className="column" id="diy-section">
          <h2 align = "center">DIY</h2>
          {CategoryTable()}

        </div>
        <div className="column" id="buy-section">
          <h2 align = "center">Buy</h2>
            {CategoryTable()}
        </div>
      </div>
    </div>
        
      <div className="circle">
        <Container maxWidth="sm">
            <Box sx={{ my: 5 }}>
                <Typography align = "center" variant="h5" component="h2" gutterBottom>
                    TOTAL: $ {invoiceTotal.toFixed(2)}
                </Typography>
            </Box>
        </Container>
      </div>
    </div>
  );
}

export default Cart;
