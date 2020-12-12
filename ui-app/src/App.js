import React, {useEffect, useRef, useState} from 'react'
import style from './App.module.scss'
import { Layout } from 'antd'
import {Home} from "./components/home/Home";
import Route from "react-router-dom/es/Route";
import {MyHeader} from "./components/MyHeader/MyHeader";
import {MyFooter} from "./components/Footer/MyFooter";
import Articles from "./components/Articles/Articles";
import Constructor from "./components/Constructor/Constructor";
import Contacts from "./components/Contacts/Contacts";
import Sources from "./components/Sources/Sources";

const { Header, Footer, Content } = Layout


const App = () => {
        const [translate, setTranslate] = useState(0)
        const [bgHeader, setBgHeader] = useState('none')
        const [scrollTop, setScrollTop] = useState(0)
        let myRef = useRef()
        let onScroll = () => {
            let top = myRef.current.scrollTop
            setScrollTop(top)
            //alert(scrollTop)
        }
  return (
      <Layout
          className={style.mainWrapper}
          onWheel={(e)=>{
            if(e.deltaY>0){
                setTranslate(-100)
                setBgHeader('none')
            }
            else if (e.deltaY<0){
                setTranslate(0)
                setBgHeader('white')
            }
              onScroll()
          }}
          onScroll={onScroll}
          ref={myRef}
      >
          <Header className={style.header}
                  style={{
                      transform: `translateY(${translate}px)`,
                      transition: `all 500ms ease-out`,
                      background: `${bgHeader}`,
                  }}
          >
              <MyHeader />
          </Header>
          <Content>
              <Route exact path={'/'} component={Home} />
              <Route exact path={'/articles'} component={Articles} />
              <Route exact path={'/constructor'} component={Constructor} />
              <Route exact path={'/contacts'} component={Contacts} />
              <Route exact path={'/sources'} component={Sources} />
          </Content>
          <Footer className={style.footer}>
              <MyFooter />
          </Footer>
      </Layout>
  )
}

export default App
