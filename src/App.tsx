import React, { useCallback } from "react";
import Header from "./components/Header";
import Particles from "react-tsparticles";
import type { ISourceOptions, Engine } from "tsparticles";
import { loadStarsPreset } from "tsparticles-preset-stars";
import particlesOptions from "./styles/particleOptions.json";
import classes from "./App.module.scss";
import RouteContent from "./components/RouteContent";

function App() {
    const particlesInit = useCallback(async (engine: Engine) => {
        loadStarsPreset(engine);
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
