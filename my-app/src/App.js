import './App.css';
import logo from './assets/penguin_logo.png';
import { Routes, Route, Outlet, Link, useParams } from "react-router-dom";
import TemporaryDrawer from './components/sideBar';
import Title from './pages/Title';
import MenuBar from './components/TopBar';
import * as React from 'react';
import data from './data/item_data.json'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<TemporaryDrawer />}>
          <Route index element={<Title />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />
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

function Category(){
  let {id} = useParams();
  const categories = ["Ceremony","CocktailHour", "Getaway", "TableDecor", "WeddingReception"];
  if(!categories.includes(id)){
    return(<NoMatch/>);
  }
  const itemData = data
  
  return (

  
    <MenuBar id ={id}/>
    </>
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
