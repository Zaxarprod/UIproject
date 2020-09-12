import React from "react"
import style from './Home.module.scss'
import {MyCarousel} from "./MyCarousel/MyCarousel";
import {Block_2} from "./Block_2/Block_2";
import {Block_3} from "./Block_3/Block_3";

export const Home = () => {
    return (
        <div className={style.home}>
            <MyCarousel />
            <Block_2 />
            <Block_3 />
        </div>
    )
}