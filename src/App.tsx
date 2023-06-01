import React, { useCallback } from "react";
import Header from "./components/Header";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { ISourceOptions } from "tsparticles-engine";
import { loadStarsPreset } from "tsparticles-preset-stars";
import particlesOptions from "./styles/particleOptions.json";
import classes from "./App.module.scss";
import RouteContent from "./components/RouteContent";

function App() {
    const particlesInit = useCallback(async (engine) => {
        loadStarsPreset(engine);
        await loadFull(engine);
    }, []);

    return (
        <div className={classes.root}>
            <Header />
            <Particles
                init={particlesInit}
                options={particlesOptions as ISourceOptions}
                className={classes.particles}></Particles>
            <RouteContent />
        </div>
    );
}
export default App;
