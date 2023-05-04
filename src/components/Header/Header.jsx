import React from 'react'
import "./Header.css";
import { Link } from 'react-router-dom';
import  logo_img from "../../assets/BookShow.png"
const Header = () => {
  return (
    <div className='header'>
    <div className="headerLeft">
    <Link to="/"> <img className='logo' src={logo_img} alt="logo" /></Link>
    <Link to="/"style={{textDecoration:"none"}}><span>Home</span></Link>
    {/* <Link to="/movies/popular"  style={{textDecoration:"none"}}> <span>Popular</span></Link>
    <Link to="/movies/top_rated" style={{textDecoration:"none"}}><span> Top rated</span></Link>
    <Link to="/movies/Upcoming" style={{textDecoration:"none"}}><span> Upcoming</span></Link> */}
    </div>
    </div>
  )
}

export default Header
