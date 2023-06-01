import React, { Fragment } from "react";
import Slide from "../../components/Slide";
import hillary from "./images/hillary.png";
import bucco from "./images/bucco.png";
import classes from "./Projects.module.scss";
import YoutubePlayer from "../../components/YoutubePlayer";

const hillarySlide = {
    slide: <YoutubePlayer url="https://youtu.be/CPYaUr0fbng" />,
    preview: hillary,
};

const buccoSlide = {
    slide: <YoutubePlayer url="https://youtu.be/rlVjvjK6-WQ" />,
    preview: bucco,
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
            .
        </p>
    </Fragment>
);

const contentBucco = (
    <Fragment>
        <h2>Sudore</h2>
        <p>Alberto Bucco is an actor. However, he always nourished a passion for visual arts since he was a child.</p>
        <p>
            We enter his studio to discover his world made of lines and Bic pens, and the cathartical aspect of his
            creative process.
        </p>
        <p>
            Full short{" "}
            <a target="_blank" rel="noreferrer noopener" className={classes.link} href="https://youtu.be/rlVjvjK6-WQ">
                here
            </a>
            .
        </p>
    </Fragment>
);

const title = <Fragment>Interviews - A two-series interviews made for the RUFA 2022 documentary class.</Fragment>;

const Interviews = () => {
    return (
        <Fragment>
            <Slide media={[hillarySlide, buccoSlide]} content={[contentHillary, contentBucco]} title={title} />
        </Fragment>
    );
};

export default Interviews;
