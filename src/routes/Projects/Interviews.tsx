import React, { Fragment } from "react";
import Slide from "../../components/Slide";
import hillary from "./images/hillary.png";
import bucco from "./images/bucco.png";
import ago from "./images/ago.png";
import punta from "./images/puntaPreview.webp";
import ragazzi from "./images/ragazzi.webp";
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

const encounterSlide = {
    slide: <YoutubePlayer url="https://youtu.be/WcgPTBVhWz8" />,
    preview: ago,
};

const puntaslide = {
    slide: <YoutubePlayer url="https://youtu.be/1UZvKmc9Les" />,
    preview: punta,
};

const ragazziSlide = {
    slide: <YoutubePlayer url="https://youtu.be/G3eRpJyJ5Vg" />,
    preview: ragazzi,
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

const contentEncounters = (
    <Fragment>
        <h2>Encounters</h2>
        <p>
            During a night like any other in Rome, music critic, TV author, novelist, and photographer Anton Giulio
            Onofri recalls the day he met the legendary conductor Leonard Bernstein.
        </p>
        <p>
            As he takes us on a car trip across the Roman night, we discover a heartwarming story of nostalgia, music,
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

const contentPunta = (
    <Fragment>
        <h2>La punta della spada</h2>
        <p>
            An investigation on the figure of Pier Paolo Pasolini through the lenses of William: a film student from
            Sweden.
        </p>
        <p>
            As he faces a series of (mostly disappointing) encounters and experiences, William tries to give his
            portrayal of the figure of the artist and of modern Italy in general.
        </p>
        <p>
            Commedia all'Italiana meets documentary filmaking. The film is an attempt to find order in a very chaotic
            country.
        </p>
        <p>
            To request a preview, send a mail to{" "}
            <a className={classes.link} href="mailto:marcobaratta96@gmail.com">
                marcobaratta96@gmail.com
            </a>
        </p>
    </Fragment>
);

const contentRagazzi = (
    <Fragment>
        <h2>Tre Allegri Ragazzi Morti</h2>
        <p>Three young men are waiting in a limbo to get a call to Paradise.</p>
        <p>
            Full short{" "}
            <a target="_blank" rel="noreferrer noopener" className={classes.link} href="https://youtu.be/G3eRpJyJ5Vg">
                here
            </a>
        </p>
    </Fragment>
);

const title = <Fragment>A selection of my projects</Fragment>;

const Interviews = () => {
    return (
        <Fragment>
            <Slide
                media={[puntaslide, ragazziSlide, encounterSlide, hillarySlide, buccoSlide]}
                content={[contentPunta, contentRagazzi, contentEncounters, contentHillary, contentBucco]}
                title={title}
            />
        </Fragment>
    );
};

export default Interviews;
