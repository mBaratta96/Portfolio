import React, { Fragment } from "react";
import titleImage from "./images/ago.png";
import preview from "./images/ago.png";
import Slide from "../../components/Slide";
import classes from "./Projects.module.scss";

const titleSlide = {
    slide: <img src={titleImage}></img>,
    preview: preview,
};

const content = (
    <Fragment>
        <h2>Synopsis</h2>
        <p>
            During a night like any other in Rome, music critic, TV author, novelist and photographer Anton Giulio
            Onofri recalls the day he met the legendary conductor Leonard Bernstein.
        </p>
        <p>
            As he takes us on a car trip across the Roman night, we discover an heartwarming story of nostalgia, music,
            and love.
        </p>
    </Fragment>
);

const title = (
    <Fragment>
        Encounters — A short documentary made for the RUFA 2022 filmmaking class. Full{" "}
        <a target="_blank" rel="noreferrer noopener" className={classes.link} href="https://youtu.be/WcgPTBVhWz8">
            here
        </a>
        .
    </Fragment>
);

const Encounters = () => {
    return (
        <Fragment>
            <Slide media={[titleSlide]} content={[content]} title={title}></Slide>
        </Fragment>
    );
};

export default Encounters;
