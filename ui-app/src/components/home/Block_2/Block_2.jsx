import React from "react"
import style from './Block_2.module.scss'
import ClockCircleOutlined from "@ant-design/icons/lib/icons/ClockCircleOutlined";
import LineChartOutlined from "@ant-design/icons/lib/icons/LineChartOutlined";
import DribbbleOutlined from "@ant-design/icons/lib/icons/DribbbleOutlined";
import DesktopOutlined from "@ant-design/icons/lib/icons/DesktopOutlined";
import TeamOutlined from "@ant-design/icons/lib/icons/TeamOutlined";
import SkinOutlined from "@ant-design/icons/lib/icons/SkinOutlined";

export const Block_2 = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.leftBlock}>
                <div className={style.item}>
                    <LineChartOutlined />
                    <p>Invest</p>
                </div>
                <div className={style.item}>
                    <DribbbleOutlined />
                    <p>Sport</p>
                </div>
                <div className={style.item}>
                    <DesktopOutlined />
                    <p>IT</p>
                </div>
                <div className={style.item}>
                    <SkinOutlined />
                    <p>Clothes</p>
                </div>
                <div className={style.item}>
                    <TeamOutlined />
                    <p>Social</p>
                </div>
            </div>
            <div className={style.rightBlock}>
                <ClockCircleOutlined />
                <p>Result in 10 seconds</p>
            </div>
        </div>
    )
}