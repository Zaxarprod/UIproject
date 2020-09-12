import React from "react"
import style from './Nav.module.scss'
import {NavLink} from "react-router-dom";

export const Nav = () => {
    return (
        <div className={style.nav}>
            <div className={style.item}>
                <NavLink
                    to={'/'}
                    exact
                    activeClassName={style.active}
                >
                    Home
                </NavLink>
            </div>
            <div className={style.item}>
                <NavLink
                    exact
                    to={'/constructor'}
                    activeClassName={style.active}
                >
                    Constructor
                </NavLink>
            </div>
            <div className={style.item}>
                <NavLink
                    exact
                    to={'/info'}
                    activeClassName={style.active}
                >
                    Info
                </NavLink>
            </div>
        </div>
    )
}