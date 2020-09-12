import React from "react"
import style from './Block_3.module.scss'
import { Skeleton } from 'antd'

import { useState, useEffect } from 'react';

function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    })
    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        }
        window.addEventListener("resize", handleResize)
        handleResize()
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return windowSize
}

export const Block_3 = () => {
    const size = useWindowSize()
    return (
        <div className={style.wrapper}>
            <div>
                <Skeleton
                    avatar={{
                        size: size.width*0.04,
                    }}
                    paragraph={{
                        rows: 6,
                        width: size.width*0.1,
                    }}
                    active />
            </div>
            <div>
                <Skeleton
                    avatar={{
                        size: size.width*0.04,
                    }}
                    paragraph={{
                        rows: 6,
                        width: size.width*0.1,
                    }}
                    active />
            </div>
            <div>
                <Skeleton
                    avatar={{
                        size: size.width*0.04,
                    }}
                    paragraph={{
                        rows: 6,
                        width: size.width*0.1,
                    }}
                    active />
            </div>
        </div>
    )
}