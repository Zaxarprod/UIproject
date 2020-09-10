import React from "react"
import style from './MyHeader.module.scss'
import {SearchOutlined} from '@ant-design/icons'

export const MyHeader = () => {
    return (
        <div className={style.header}>
            <div className={style.brand}>
                <h3>UI</h3>
            </div>
            <div className={style.search}>
                <SearchOutlined />
            </div>
        </div>
    )
}