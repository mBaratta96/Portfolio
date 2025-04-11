import React from "react";
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import classes from "./Home.module.scss";
import TextArea from "../../components/TextArea";
import { Link } from "react-router-dom";
import { parse } from "papaparse";
import contentString from "./content.csv?raw";
import { sortBy } from "underscore";
import hillary from "../Projects/images/hillary.png";
import bucco from "../Projects/images/bucco.png";
import ago from "../Projects/images/ago.png";
import punta from "../Projects/images/puntaPreview.webp";
import ragazzi from "../Projects/images/ragazzi.webp";

interface contentType {
    index: string;
    header: string;
    link: string;
    description: string;
}

const links = sortBy(parse(contentString, { header: true }).data as contentType[], ["index"]).map((row, index) => {
    return (
        <p key={index}>
            <Link to={`/${row.link}`} className={classes.textHeader}>
                {row.header}
            </Link>{" "}
            — {row.description}
        </p>
    );
});

const carousel = [punta, ragazzi, ago, hillary, bucco].map((image) => (
    <div key={image} className={classes["carousel-image"]}>
        <Link to="/projects">
            <img width="100%" src={image} />
        </Link>
    </div>
));

const Home = () => {
    const content = (
        <div>
            <h1 style={{ textAlign: "center" }}>Marco Baratta</h1>
            <h2 style={{ textAlign: "center" }}>
                Machine Learning Engineer and Filmmaker. Always in search of new things to learn.
            </h2>
            <p style={{ textAlign: "center", fontStyle: "italic" }}>
                I have a sentimental inclination towards hope - Orson Welles
            </p>
            <div className={classes.carousel}>{carousel}</div>
            <div className={classes.textLinks}>
                <ul>
                    <li>
                        <span className={classes.textHeader}>
                            Master&apos;s Degree in Computer Science and Engineering
                        </span>{" "}
                        — Politecnico di Milano
                    </li>
                    <li>
                        <span className={classes.textHeader}>Master&apos;s Degree in Film Arts</span> — RUFA (Rome
                        University of Fine Arts)
                    </li>
                    <li>
                        <a
                            className={classes.textHeader}
                            target="_blank"
                            rel="noreferrer noopener"
                            href="https://drive.google.com/file/d/1x2RyW-YYrFnyfIPv9cgy9tNjg5tY2ox9/view?usp=sharing">
                            My CV
                        </a>{" "}
                        (
                        <a
                            className={classes.textHeader}
                            target="_blank"
                            rel="noreferrer noopener"
                            href="https://drive.google.com/file/d/10WYrPJFKvQDd_Je9p1vGVdB1Ucgo_ngy/view?usp=sharing">
                            CV ita
                        </a>
                        )
                    </li>
                    <li>{links[2]}</li>
                    <li>{links[1]}</li>
                </ul>
            </div>
            <div className={classes.contact}>
                <div className={classes.social}>
                    <a href="https://github.com/mBaratta96">
                        <FiGithub size="2em" />
                    </a>
                    <a href="https://www.linkedin.com/in/mbaratta96/">
                        <FiLinkedin size="2em" />
                    </a>
                    <a href="https://www.instagram.com/marco_baratta_/">
                        <FiInstagram size="2em" />
                    </a>
                </div>
                <p>marcobaratta96@gmail.com</p>
            </div>
        </div>
    );
    return (
        <div className={classes.root}>
            <div className={classes.textWrapper}>
                <TextArea>{content}</TextArea>
            </div>
        </div>
    );
};

export default Home;
