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

function App() {
  return (
    <div className="App">
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
          <Route path="Categories/:id" element={<Category />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
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
