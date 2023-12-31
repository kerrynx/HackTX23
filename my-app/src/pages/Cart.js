import CategoryTable from "./shop2.js";
import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MenuBar from "../components/TopBar.js";


import "../App.css";
import "./Cart.css";
const TAX_RATE = 0.08;

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(Category, qty, unit) {
  const price = priceRow(qty, unit);
  return { Category, qty, unit, price };
}

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

function Cart() {
  const item = require("../data/item_data.json");

  var rows = [
    createRow(item.BUY[0].Name, 1, item.BUY[0].Price),
    createRow(item.BUY[1].Name, 1, item.BUY[1].Price),
    createRow(item.BUY[2].Name, 1, item.BUY[2].Price),
  ];
  var diyRows = [
    createRow(item.DIY[0].Name, 1, item.DIY[0].Price),
    createRow(item.DIY[1].Name, 1, item.DIY[1].Price),
    createRow(item.DIY[2].Name, 1, item.DIY[2].Price),
  ];
  const invoiceTotal = (subtotal(rows) + subtotal(diyRows)) * (1 + TAX_RATE);

  return (
    <body>
      <header className="Cart-header">
        <div className="Cart" style={{ backgroundColor: "#9CAF88" }}>
          <div className="remaining_rings">
            <Container maxWidth="sm">
              <Box sx={{ my: 5 }}>
                <Typography
                  fontSize = "75px"
                  align="center"
                  variant="h3"
                  component="h1"
                  gutterBottom
                  padding="20px"
                  sx={{ fontFamily: "JosefinSlab", color: "white" }}
                >
                  Remaining
                </Typography>
              </Box>
            </Container>

            <div class="row">
              <div className="column" id="diy-section">
                <h2 align="center" color="white">
                  <font size = "+10000"> 
                  Time
                  </font>
                </h2>
                <img
                  src={
                    "https://quickchart.io/chart?w=300&c=%7B%0A%20%20type%3A%20%27doughnut%27%2C%0A%20%20data%3A%20%7B%0A%20%20%20%20datasets%3A%20%5B%7B%0A%20%20%20%20%20%20data%3A%20%5B70%2C%2060%5D%2C%0A%20%20%20%20%20%20backgroundColor%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%27rgb(255%2C%20216%2C%20123)%27%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%27rgb(255%2C%20237%2C%20195)%27%0A%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%7D%5D%0A%20%20%7D%0A%7D%0A"
                  }
                  className="Time-Chart"
                  alt="time"
                />
                <h2 align="center" padding="80px">
                  <font size = "+10000"> 
                    DIY
                  </font>
                  
                </h2>
                {CategoryTable(0)}
              </div>
              <div className="column" id="buy-section">
                <h2
                  align="center"
                  sx={{ fontFamily: "JosefinSlab", color: "white" }}
                >
                  <font size = "+10000"> 
                  Balance
                  </font>
                </h2>
                <h2 text-align= 'center'>

                <img
                  text-align = 'center'
                  display = 'block'
                  src={
                    "https://quickchart.io/chart?w=300&c=%7B%0A%20%20type%3A%20%27doughnut%27%2C%0A%20%20data%3A%20%7B%0A%20%20%20%20datasets%3A%20%5B%7B%0A%20%20%20%20%20%20data%3A%20%5B70%2C%2060%5D%2C%0A%20%20%20%20%20%20backgroundColor%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%27rgb(255%2C%20216%2C%20123)%27%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%27rgb(255%2C%20237%2C%20195)%27%0A%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%7D%5D%0A%20%20%7D%0A%7D%0A"
                  }
                  className="Money-Chart"
                  alt="money"
                />
                </h2>
                <h2 align="center" padding="80px">
                <font size = "+10000"> 
                    BUY
                  </font>
                </h2>
                {CategoryTable(1)}
              </div>
            </div>
          </div>

          <div className="circle">
            <Container maxWidth="sm">
              <Box sx={{ my: 5 }}>
                <Typography
                  align="center"
                  variant="h5"
                  component="h2"
                  gutterBottom
                  fontSize = "50px"
                  sx={{ fontFamily: "JosefinSlab", color: "white"}}
                >
                  TOTAL: $ {invoiceTotal.toFixed(2)} <br></br>
                  TIME: 10 Hours
                </Typography>
              </Box>
            </Container>
          </div>
        </div>
      </header>
    </body>
  );
}

export default Cart;
