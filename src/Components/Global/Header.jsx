import React from "react";
import { Navbarr } from "./Navbar";
//import PropTypes from 'prop-types';

const Header = ({ children }) => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100">
            <Navbarr />
        </div>
    )
}

export { Header };