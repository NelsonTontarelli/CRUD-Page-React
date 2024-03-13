import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import Home from "../screens/Home";
import "../styles/NavBar.css";
import ProductsController from "../screens/ProductsController";
import UsersController from "../screens/UsersController";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import { useState } from "react";

function NavBar() {
  const [pageNum, setPage] = useState(0);

  return (
    <BrowserRouter>
      <header className="header-links">
        <nav className="nav-container">
          <NavLink to="/" className={pageNum === 1 || location.pathname === '/' ? "nav-links nav-links-focus": "nav-links"} onClick={() => setPage(1)}>
            <HomeOutlinedIcon /> <p>Home</p>
          </NavLink>
          <NavLink to="/Products" className={pageNum === 2 || location.pathname === '/Products' ? "nav-links nav-links-focus": "nav-links"} onClick={() => setPage(2)} >
            <Inventory2OutlinedIcon />
            <p>Products</p>
          </NavLink>
          <NavLink to="/Users" className={pageNum === 3 || location.pathname === '/Users'? "nav-links nav-links-focus": "nav-links"} onClick={() => setPage(3)}>
            <GroupOutlinedIcon />
            <p>Users</p>
          </NavLink>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Products" element={<ProductsController />}  />
        <Route path="/Users" element={<UsersController />} />
      </Routes>
    </BrowserRouter>
  );
}

export default NavBar;
