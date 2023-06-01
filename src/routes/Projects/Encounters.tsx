import React, { Fragment } from "react";
import preview from "./images/ago.png";
import Slide from "../../components/Slide";
import classes from "./Projects.module.scss";
import YoutubePlayer from "../../components/YoutubePlayer";

const titleSlide = {
    slide: <YoutubePlayer url="https://youtu.be/WcgPTBVhWz8" />,
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
        <p>
            Full short{" "}
            <a target="_blank" rel="noreferrer noopener" className={classes.link} href="https://youtu.be/WcgPTBVhWz8">
                here
            </a>
            .
        </p>
    </Fragment>
);

const title = <Fragment>Encounters — A short documentary made for the RUFA 2022 filmmaking class. </Fragment>;

const Encounters = () => {
    return (
        <Fragment>
            <Slide media={[titleSlide]} content={[content]} title={title}></Slide>
        </Fragment>
    );
};

export default Encounters;
