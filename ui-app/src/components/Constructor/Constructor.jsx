import React from "react"
import style from './Constructor.module.scss'

const Constructor = () => {
    return (
        <div className={style.constructor}>
            <div>
                <h2>Описание конструктора</h2>
                <p>
                    Данная программа будет принимать на вход различные параметры.<br/>
                    Это род деятельности организации. Количество пунктов меню, <br/>
                    цветовая палитра, стиль, и др. В течении нескольких секунд<br/>
                    заказчик уже получит готовый удобный интерфейс, разработанный<br/>
                    конструктором.
                </p>
            </div>
        </div>
    )
}

export default Constructor