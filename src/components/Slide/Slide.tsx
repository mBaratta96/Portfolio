import React, { useState, useEffect } from "react";
import Preview from "../Preview";
import classes from "./Slide.module.less";
import { useTransition, animated, config } from "react-spring";

const translationPercentage = "50%";

interface SlideProps {
	images: Array<{ slide: string; preview?: string }>;
	content?: Array<JSX.Element>;
	title?: string;
}

const Slide = (props: SlideProps) => {
	const { images, content, title } = props;
	const [slideSelected, setSlideSelected] = useState<number>(0);
	const imageTransition = useTransition(slideSelected, {
		config: config.gentle,
		from: {
			opacity: 0,
			transform: `translate3d(-${translationPercentage}, 0px, 0px)`,
		},
		enter: { opacity: 1, transform: "translate3d(0%, 0px, 0px)" },
		leave: {
			opacity: 0,
			transform: `translate3d(${translationPercentage}, 0px, 0px)`,
		},
		exitBeforeEnter: true,
	});
	const handleArrowPress = (e: KeyboardEvent) => {
		if (e.code === "ArrowLeft") {
			setSlideSelected(Math.max(0, slideSelected - 1));
		}
		if (e.code === "ArrowRight") {
			setSlideSelected(Math.min(9, slideSelected + 1));
		}
	};
	useEffect(() => {
		window.addEventListener("keydown", handleArrowPress);
		return () => {
			window.removeEventListener("keydown", handleArrowPress);
		};
	});
	return (
		<div className={classes.root}>
			<div className={classes.mainTitle}>
				<h2>{title ?? "Title goes here"}</h2>
			</div>
			<div className={classes.mainImage}>
				{imageTransition((style, item) => {
					return (
						item == slideSelected && (
							<animated.img
								style={style}
								src={new URL(images[slideSelected].slide, import.meta.url).href}
							></animated.img>
						)
					);
				})}
			</div>
			{imageTransition((style, item) => {
				return (
					<animated.div style={style} className={classes.mainText}>
						{item == slideSelected &&
							(content ? (
								content[slideSelected]
							) : (
								<h2>Name of image is {item}</h2>
							))}
						<div className={classes.mainTextBorderLeft} />
						<div className={classes.mainTextBorderTop} />
						<div className={classes.mainTextBorderRight} />
						<div className={classes.mainTextBorderBottom} />
					</animated.div>
				);
			})}
			<Preview
				setSlide={setSlideSelected}
				images={images.map((image) => image.preview ?? image.slide)}
			/>
		</div>
	);
};

export default Slide;
