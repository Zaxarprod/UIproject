import React from "react"
import style from './Home.module.scss'
import {MyCarousel} from "./MyCarousel/MyCarousel";

export const Home = () => {
    return (
        <div className={style.home}>
            <MyCarousel />
        </div>
    )
}