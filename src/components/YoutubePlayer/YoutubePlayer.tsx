import React from "react";
import ReactPlayer from "react-player/youtube";

interface YoutubePlayerOptions {
    url: string;
}

const YoutubePlayer = (props: YoutubePlayerOptions) => {
    const { url } = props;
    return <ReactPlayer url={url} width={"100%"} height={"100%"} controls={true} />;
};

export default YoutubePlayer;
