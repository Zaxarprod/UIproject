import React from "react"
import style from './MyHeader.module.scss'
import {Nav} from "./Nav/Nav"
import {Search} from "./Search/Search";

export const MyHeader = () => {
    return (
        <div className={style.header}>
            <div className={style.brand}>
                <h3>UI</h3>
            </div>
            <Nav />
            <Search />
        </div>
    )
}