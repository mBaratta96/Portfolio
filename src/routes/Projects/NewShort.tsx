import React, { Fragment } from "react";
import { FountainParser, IParserOptions } from "screenplay-js";
import scene1Script from "./fountain/scene1.fountain?raw";
import scene2Script from "./fountain/scene2.fountain?raw";
import scene3Script from "./fountain/scene3.fountain?raw";
import classes from "./Projects.module.scss";
import Slide from "../../components/Slide";
import { parse } from "papaparse";
import { sortBy } from "underscore";
import contentString from "./fountain/content.csv?raw";

interface newShortType {
	index: string;
	title?: string;
	description: string;
}

const scriptClasses = [
	"scene-heading",
	"dialogue",
	"character",
	"action",
	"parenthetical",
];

const parseScript = (scriptString: string) => {
	const script = FountainParser.parse(scriptString, {
		script_html: true,
	} as IParserOptions).script_html as string;
	return scriptClasses.reduce(
		(previous, current) =>
			classes[current]
				? previous.replaceAll(`"${current}"`, classes[current])
				: previous,
		script
	);
};

const scripts = [scene1Script, scene2Script, scene3Script].map(
	(scriptString, index) => {
		const script = parseScript(scriptString);
		const tempDiv = document.createElement("div");
		tempDiv.innerHTML = script;
		const sceneHeadings = tempDiv.querySelectorAll(".scene-heading");
		sceneHeadings.forEach(
			(element) =>
				(element.textContent =
					element.getAttribute("data-scene-heading-index") +
					". " +
					element.textContent)
		);
		return (
			<div
				key={index}
				className={classes.script}
				dangerouslySetInnerHTML={{ __html: tempDiv.innerHTML }}
			></div>
		);
	}
);

const content = sortBy(
	parse(contentString, { header: true }).data as newShortType[],
	["index"]
).map((data, index) => {
	const sceneDescription = data.description.split("\\n").map((str, index) => (
		<p
			key={index}
			dangerouslySetInnerHTML={{
				__html: str.replaceAll("classes.link", classes.link),
			}}
		/>
	));
	return (
		<div key={index}>
			<h2>{data.title}</h2>
			{sceneDescription}
			{index > 0 ? scripts[index - 1] : ""}
		</div>
	);
});

const media = ["synopsis", "scene1", "scene2", "scene3"].map((item) => {
	return {
		slide: <img src={new URL(`./images/${item}.webp`, import.meta.url).href} />,
		preview: new URL(`./images/${item}.webp`, import.meta.url).href,
	};
});

const title = (
	<Fragment>
		Mirrorland — Click on the following links for the complete scripts (Italian{" "}
		<a
			className={classes.link}
			target="_blank"
			rel="noreferrer noopener"
			href="https://drive.google.com/file/d/1ua87R9Hru6LHG-lzxUMEjm09tn4xXE8A/view?usp=sharing"
		>
			here
		</a>{" "}
		/ English{" "}
		<a
			className={classes.link}
			target="_blank"
			rel="noreferrer noopener"
			href="https://drive.google.com/file/d/1sHXwyvsPBU8TkDXmcrVFqGqJHewbjSqo/view?usp=sharing"
		>
			here
		</a>
		)
	</Fragment>
);

const subtitle =
	"This is a collection of visual ideas for scenes taken from a new short script I wrote. Here, you can find the synopsis, some context for the selected scenes, and the corresponding excerpt of the script.";

const NewShort = () => {
	return (
		<Slide media={media} content={content} title={title} subtitle={subtitle} />
	);
};

export default NewShort;