import "./App.css";
import { Routes, Route, Outlet, Link, useParams } from "react-router-dom";
import TemporaryDrawer from "./components/sideBar";
import Title from "./pages/Title";
import MenuBar from "./components/TopBar";
import * as React from "react";
import data from "./data/item_data.json";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import { Typography } from "@mui/material";
import { CardActions } from "@mui/material";
import { Button } from "@mui/base";
import { Grid } from "@mui/material";
import Data from './pages/Data';
import Cart from './pages/Cart';
// import Shop from './pages/Shop';
import CategorySelect from './pages/CategorySelect';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<TemporaryDrawer />}>
          <Route index element={<Title />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/data" element={<Data />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="Categories/:id" element={<Category />} />
          {/* <Route path="shop" element = {<Shop />} /> */}

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
    return (
      <div>
        {/* A "layout route" is a good place to put markup you want to
            share across all the pages on your site, like navigation. */}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/nothing-here">Nothing Here</Link>
            </li>
            <li>
              <Link to="/data">Data</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </nav>
  
        <hr />
  
        {/* An <Outlet> renders whatever child route is currently active,
            so you can think about this <Outlet> as a placeholder for
            the child routes we defined above. */}
        <Outlet />
      </div>
    );
  }
  

function Category() {
  let { id } = useParams();
  const categories = [
    "Ceremony",
    "CocktailHour",
    "Getaway",
    "TableDecor",
    "WeddingReception",
  ];
  if (!categories.includes(id)) {
    return <NoMatch />;
  }
  const itemData = data;
  console.log(id);
  const sortedData = [];
  for (let i = 0; i < itemData.DIY.length; i++) {
    if (itemData.DIY[i].Category === id) {
      sortedData.push([itemData.BUY[i], itemData.DIY[i]]);
    }
  }
  console.log(sortedData);
  const GenerateData = () => {
    return sortedData.map((data) => (
      <>
        <Grid container justifyContent="center" spacing={3}>
          <Grid item xs={3}>
            <Card>
              {/* <CardMedia
              sx={{ height: 140 }}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="green iguana"
            /> */}
              <CardContent justifyContent="center">
                <Typography gutterBottom variant="h5" component="div">
                  {data[0].Name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {"Cost: $" + data[0].Price + " Time: " + data[0].Hours}
                </Typography>
              </CardContent>
              <CardActions justifyContent="center">
                <Button size="small">Add to Cart</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <div>xs=8</div>
          </Grid>
          <Grid item xs={3}>
            <Card>
              {/* <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      /> */}
              <CardContent justifyContent="center">
                <Typography gutterBottom variant="h5" component="div">
                  {data[1].Name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {"Cost: $" + data[1].Price + " Time: " + data[1].Hours}
                </Typography>
              </CardContent>
              <CardActions justifyContent="center">
                <Button size="small">Add to Cart</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </>
    ));
  };

  return (
    <>
      <MenuBar id={id} />
      <GenerateData />
    </>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
export default App;

