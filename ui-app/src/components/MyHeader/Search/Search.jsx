import React, {useState} from "react"
import {SearchOutlined} from "@ant-design/icons"
import './Search.scss'
import {CSSTransition} from "react-transition-group";
import CloseOutlined from "@ant-design/icons/lib/icons/CloseOutlined";

export const Search = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [isMount, setIsMount] = useState(false)
    return (
        <div className={'wrapper'}>
            {isMount && <CSSTransition
                    in={isVisible}
                    timeout={300}
                    classNames={'anim'}
                >
                    <input  type={'text'}/>
                </CSSTransition>}
            <div className={'search'}
                 onClick={()=>{
                     setIsVisible(!isVisible)
                     setIsMount(true)
                 }}>
                {!isVisible && <SearchOutlined />}
                {isVisible && <CloseOutlined />}
            </div>
        </div>
    )
}