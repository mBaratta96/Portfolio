import React from "react";
import classes from "./Header.module.scss";
import HeaderLink from "./HeaderLink";

const Header = () => {
    return (
        <div className={classes.root}>
            <HeaderLink route="">Home</HeaderLink>
            <HeaderLink>Inspiration</HeaderLink>
            <HeaderLink>Projects</HeaderLink>
        </div>
    );
};

export default Header;
