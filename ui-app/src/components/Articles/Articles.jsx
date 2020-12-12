import React from "react"
import style from './Articles.module.scss'

const Articles = () => {
    return (
        <div className={style.articles}>
            <a href={'https://studme.org/121249/informatika/osobennosti_polzovatelskogo_interfeysa'}>
                <h2>Особенности пользовательского интерфейса</h2>
                <p>Пользовательский интерфейс web-приложений тоже имеет свои особенности, обусловленные...</p><p>Узнать больше...</p>
            </a>
            <a href={'https://studref.com/400623/informatika/interfeysy_informatsionnyh_sistemah'}>
                <h2>ВЕБ-ИНТЕРФЕЙСЫ В ИНФОРМАЦИОННЫХ СИСТЕМАХ</h2>
                <p>В этой главе речь пойдет об использовании технологий веб-сис- тем для реализации...</p><p>Узнать больше...</p>
            </a>
            <a href={'http://docs.cntd.ru/document/1200113012'}>
                <h2>Эргономика взаимодействия человек-система.</h2>
                <p>Правила применения настоящего стандарта установлены в...</p><p>Узнать больше...</p>
            </a>
            <a href={'https://docplayer.ru/28869433-Ergonomika-polzovatelskih-interfeysov-v-informacionnyh-sistemah.html'}>
                <h2>Проектирование веб-интерфейсов для пользователя<br/>
                    на основе конфигурируемых компонентов</h2>
                <p>Для решения задачи создания пользовательского интерфейса проектировщикам необходимы...</p><p>Узнать больше...</p>
            </a>
            <a href={'http://www.vestnik.vsu.ru/pdf/econ/2013/01/2013-01-31.pdf'}>
                <h2>ВЕБ-САЙТ КОМПАНИИ КАК КОММУНИКАТИВНЫЙ<br/>
                    МАРКЕТИНГОВЫЙ ИНСТРУМЕНТ</h2>
                <p>Веб-сайт компании открывает для нее новые возможности...</p><p>Узнать больше...</p>
            </a>
        </div>
    )
}

export default Articles