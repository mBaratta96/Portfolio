import React from "react";
import { Link } from "react-router-dom";
import { useSpring, animated, config } from "react-spring";
import classes from "./Header.module.scss";
import { useLocation } from "react-router-dom";

interface HeaderLinkProps {
    children: string;
    route?: string;
    submenu?: boolean;
}

const onHoverColor = "#706f7180";
const defaultColor = "#c5c3c600";

const convertToLink = (s: string) => s.replace(/\s+/g, "").toLowerCase();

const HeaderLink = (props: HeaderLinkProps) => {
    const { children: title, route, submenu } = props;
    const [{ backgroundColor }, setColor] = useSpring(() => ({
        backgroundColor: defaultColor,
        config: config.stiff,
    }));
    const AnimatedLink = animated(Link);
    const location = useLocation();
    const url = `/${route ?? convertToLink(title)}`;
    console.log(location.pathname);
    console.log(url);
    console.log(classes);

    return (
        <AnimatedLink
            to={url}
            onMouseOver={() => setColor({ backgroundColor: onHoverColor })}
            onMouseLeave={() => setColor({ backgroundColor: defaultColor })}
            style={{ backgroundColor }}
            className={location.pathname === url ? classes.linkActive : classes.link}>
            {submenu ? <h4>{title}</h4> : <h3>{title}</h3>}
        </AnimatedLink>
    );
};

export default HeaderLink;
