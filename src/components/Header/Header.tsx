import React from "react";
import classes from "./Header.module.scss";
import HeaderLink from "./HeaderLink";

const Header = () => {
    return (
        <div className={classes.root}>
            <HeaderLink route="">Home</HeaderLink>
            <HeaderLink>Projects</HeaderLink>
            <HeaderLink>Inspiration</HeaderLink>
        </div>
    );
};

export default Header;
