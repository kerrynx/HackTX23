import "./App.css";
import "./index.css";
import { Routes, Route, Link, useParams } from "react-router-dom";
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
import Data from "./pages/Data";
import { useState } from "react";
import { useEffect } from "react";

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
                <MenuBar />
                <Shop />
              </>
            }
          />
          <Route path="/data" element={<Data />} />
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
  return <GenerateCategoryPage id={id} />;
}
function GenerateCategoryPage(category) {
  const [imageZeroSources, setImageZeroSources] = useState([]);

  const [imageOneSources, setImageOneSources] = useState([]);
  const itemData = data;
  itemData.BUY.sort((a, b) => {
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
  itemData.DIY.sort((a, b) => {
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
    if (diyList[i].Category === category.id) {
      sortedData.push([buyList[i], diyList[i]]);
    }
  }
  console.log(sortedData);

  const getMaterials = (props) => {
    let materials = props.Materials[0].Name;
    for (let i = 1; i < props.Materials.length; i++) {
      materials += ", " + props.Materials[i].Name;
    }
    return materials;
  };

  useEffect(() => {
    sortedData.forEach((data) => {
      import(process.env.PUBLIC_URL + data[1].url)
        .then((image) => {
          setImageOneSources((prevImageSources) => [
            ...prevImageSources,
            image.default,
          ]);
        })
        .catch((error) => {
          console.error("Error loading image:", error);
        });
    });
  }, [sortedData]);
  useEffect(() => {
    sortedData.forEach((data) => {
      import(process.env.PUBLIC_URL + data[0].url)
        .then((image) => {
          setImageZeroSources((prevImageSources) => [
            ...prevImageSources,
            image.default,
          ]);
        })
        .catch((error) => {
          console.error("Error loading image:", error);
        });
    });
  }, [sortedData]);
  const GenerateData = () => {
    let i = 0;
    return sortedData.map((data) => (
      <>
        <Grid container justifyContent="center" alignItems="center" spacing={3}>
          <Grid item xs={4} sx={{ margin: "8px" }}>
            <Card className="buyElements">
              <CardMedia
                sx={{ height: 140 }}
                image={imageZeroSources[i]}
                title="green iguana"
              />
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
                image={imageOneSources[i]} ///
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
        {(i += 2)}
      </>
    ));
  };
  if ((category = "CocktailHour")) {
    category = "Cocktail Hour";
  }
  if ((category = "TableDecor")) {
    category = "Table Decor";
  }
  if ((category = "WeddingReception")) {
    category = "Wedding Reception";
  }
  return (
    <>
      <MenuBar id={category} />
      <GenerateData />
    </>
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
