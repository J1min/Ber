import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Slider from "../components/slider";
import Project from "../components/project";
import Post from "../components/post";
import Header from "../components/header";
import React from "react";

const Main: NextPage = () => {
    return (
        <div>
            <Header/>
            <Slider />
            <div id="section">
                <Project />
                <Post />
            </div>
        </div>
    );
};
export default Main;
