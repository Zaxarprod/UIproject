import React from "react"
import style from './Sources.module.scss'

const Sources = () => {
    return (
        <div className={style.sources}>
            <div>
                <h2>Список использованной литературы:</h2>
                <a href={'https://studref.com/400611/informatika/internet-tehnologii_v_ekonomike_znaniy'}>
                    <h2>Интернет-технологии в экономике знаний</h2>
                    <p>Абдикеева М.Н.</p>
                </a>
                <a href={'https://studme.org/121236/informatika/razrabotka_internet-prilozheniy'}>
                    <h2>РАЗРАБОТКА ИНТЕРНЕТ-ПРИЛОЖЕНИЙ</h2>
                    <p>Доросинский Л.Г.</p>
                </a>
                <a href={'http://docs.cntd.ru/document/1200113012'}>
                    <h2>ГОСТ Р ИСО 9241-151-2014</h2>
                    <p>Электронный текст документа
                        подготовлен АО "Кодекс"</p>
                </a>
                <a href={'https://docplayer.ru/28869433-Ergonomika-polzovatelskih-interfeysov-v-informacionnyh-sistemah.html'}>
                    <h2>ЭРГОНОМИКА ПОЛЬЗОВАТЕЛЬСКИХ ИНТЕРФЕЙСОВ В ИНФОРМАЦИОННЫХ СИСТЕМАХ</h2>
                    <p>Попов А.А.</p>
                </a>
                <a href={'https://docplayer.ru/28869433-Ergonomika-polzovatelskih-interfeysov-v-informacionnyh-sistemah.html'}>
                    <h2>Проектирование веб-интерфейсов для пользователя<br/>
                        на основе конфигурируемых компонентов</h2>
                    <p>Ю.А. Часовских, М.А. Бакаев</p>
                </a>
                <a href={'http://www.vestnik.vsu.ru/pdf/econ/2013/01/2013-01-31.pdf'}>
                    <h2>ВЕБ-САЙТ КОМПАНИИ КАК КОММУНИКАТИВНЫЙ<br/>
                        МАРКЕТИНГОВЫЙ ИНСТРУМЕНТ</h2>
                    <p>Ю. В. Шурчкова</p>
                </a>
            </div>
        </div>
    )
}

export default Sources