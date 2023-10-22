import "./App.css";
import "./index.css";
import { Routes, Route, Outlet, Link, useParams } from "react-router-dom";
import TemporaryDrawer from "./components/sideBar";
import Title from "./pages/Title";
import MenuBar from "./components/TopBar";
import * as React from "react";
import data from "./data/item_data.json";
import Shop from "./pages/Cart.js";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import { Typography } from "@mui/material";
import { CardActions } from "@mui/material";
import { Button } from "@mui/base";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { CardMedia } from "@mui/material";

// import Shop from './pages/Shop';
import CategorySelect from "./pages/CategorySelect";

function App() {
  return (
    <div className="default">
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <>
                <TemporaryDrawer />
                <Title />
              </>
            }
          />
          <Route
            path="/cart"
            element={
              <>
                <TemporaryDrawer />
                <Shop />
              </>
            }
          />
          <Route path="Categories/:id" element={<Category />} />
          {/* <Route path="shop" element = {<Shop />} /> */}

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
      <Box sx={{ bgcolor: "#9caf88", height: "100vh" }} />
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
  data.BUY.sort((a, b) => {
    const nameA = a.Name.toUpperCase();
    const nameB = b.Name.toUpperCase();

    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  data.DIY.sort((a, b) => {
    const nameA = a.Name;
    const nameB = b.Name;

    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  const diyList = itemData.DIY;
  const buyList = itemData.BUY;
  const sortedData = [];
  for (let i = 0; i < diyList.length; i++) {
    if (diyList[i].Category === id) {
      sortedData.push([buyList[i], diyList[i]]);
    }
  }
  const getMaterials = (props) => {
    let materials = props.Materials[0].Name;
    for (let i = 1; i < props.Materials.length; i++) {
      materials += ", " + props.Materials[i].Name;
    }
    return materials;
  };
  console.log(sortedData);
  const GenerateData = () => {
    return sortedData.map((data) => (
      <>
        {console.log(data[1].url)}
        <Grid container justifyContent="center" alignItems="center" spacing={3}>
          <Grid item xs={4} sx={{ margin: "8px" }}>
            <Card className="buyElements">
              <CardMedia sx={{ height: 140 }} title="green iguana" />
              <CardContent justifyContent="center">
                <Typography gutterBottom variant="h5" component="div">
                  {data[0].Name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {"Cost: $" + data[0].Price + " Time: " + data[0].Hours}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Add to Cart</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item className="default" justifyContent="center">
            <Card className="default">
              <CardContent
                justifyContent="center"
                className="default"
                textAlign="center"
              >
                <Typography gutterBottom variant="h5" component="div">
                  Or
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4} sx={{ margin: "8px" }}>
            <Card className="diyElements">
              <CardMedia
                sx={{ height: 140 }}
                image={data[1].url}
                title="green iguana"
              />
              <CardContent justifyContent="center">
                <Typography gutterBottom variant="h5" component="div">
                  {data[1].Name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {"Cost: $" +
                    data[1].Price +
                    " Time: " +
                    data[1].Hours +
                    " Hours. Materials: " +
                    getMaterials(data[1])}
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
