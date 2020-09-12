import React from "react"
import style from './MyHeader.module.scss'
import {SearchOutlined} from '@ant-design/icons'
import {Nav} from "./Nav/Nav";

export const MyHeader = () => {
    return (
        <div className={style.header}>
            <div className={style.brand}>
                <h3>UI</h3>
            </div>
            <Nav />
            <div className={style.search}>
                <SearchOutlined />
            </div>
        </div>
    )
}