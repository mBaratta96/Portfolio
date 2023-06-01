import React, { Fragment } from "react";
import Slide from "../../components/Slide";
import hillary from "./images/hillary.png";
import classes from "./Projects.module.scss";

const titleSlide = {
    slide: <img src={hillary}></img>,
    preview: hillary,
};

const contentHillary = (
    <Fragment>
        <h2>A Day at the Park</h2>
        <p>Hilary lives in Novara, but her family is from Cuba.</p>
        <p>
            She agreed to be interviewed about her origins, her grandma, and her relationship with Italy. The interview
            happened in the Villa Borghese park, through a video chat.
        </p>
        <p>
            Full short{" "}
            <a target="_blank" rel="noreferrer noopener" className={classes.link} href="https://youtu.be/CPYaUr0fbng">
                here
            </a>
        </p>
    </Fragment>
);

const title = (
    <Fragment>Interviews - A two-series interviews documentary made for the RUFA 2022 documentary class.</Fragment>
);

const Park = () => {
    return (
        <Fragment>
            <Slide media={[titleSlide]} content={[contentHillary]} title={title} />
        </Fragment>
    );
};

export default Park;
