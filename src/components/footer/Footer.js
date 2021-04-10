import React from 'react';
import './Footer.css';
import {RiHome2Line, RiRefreshLine, RiArrowLeftLine, RiMenuFill} from "react-icons/ri";
import { Link } from 'react-router-dom';

function Footer(){
    return <div className="footer">
        <p className="icon" id="back-button"><RiArrowLeftLine/></p>
        <Link to="/">
        <p className="icon" id="home-button"><RiHome2Line/></p>
        </Link>
        <p className="icon"><RiRefreshLine/></p>

    </div>
}
export default Footer