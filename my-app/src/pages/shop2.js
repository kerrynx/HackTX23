import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Cart.css';



const TAX_RATE = 0.08;

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

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





export default function CategoryTable(cat_num) {
  const item = require("../data/item_data.json");


  var cat = cat_num == 0 ? "DIY": "BUY";

  var rows = [
    createRow(item.BUY[0].Name, 1, item.BUY[0].Price),
    createRow(item.BUY[1].Name, 1, item.BUY[1].Price),
    createRow(item.BUY[2].Name, 1, item.BUY[2].Price),
  ];
  var diyRows = [
    createRow(item.DIY[0].Name, 1, item.DIY[0].Price),
    createRow(item.DIY[1].Name, 1, item.DIY[1].Price),
    createRow(item.DIY[2].Name, 1, item.DIY[2].Price)
  ];
  
  if (cat_num == 0) {
    rows = diyRows;
  }
  var invoiceSubtotal = subtotal(rows);

  const invoiceTaxes = TAX_RATE * invoiceSubtotal;

  return (
    <body>
    <TableContainer className = 'Cart' component={Paper} style={{backgroundColor:'#9CAF88', color: 'white',}}  >
      <Table sx={{ minWidth: 700 }} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell colSpan={3}>
                ITEM
            </TableCell>
            <TableCell align="right">PRICE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.Category}>
              <TableCell>{row.Category}</TableCell>
              <TableCell align="right" colSpan = {3}>{ccyFormat(row.price)}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={2}>{cat} SUBTOTAL:</TableCell>
            <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>TAXES:</TableCell>
            <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
            <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </body>
  );
}