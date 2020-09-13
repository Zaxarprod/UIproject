import React from 'react'
import style from './App.module.scss'
import { Layout } from 'antd'
import {Home} from "./components/home/Home";
import Route from "react-router-dom/es/Route";
import {MyHeader} from "./components/MyHeader/MyHeader";
import {MyFooter} from "./components/Footer/MyFooter";

const { Header, Footer, Content } = Layout

const App = () => {
  return (
      <Layout>
          <Header className={style.header}>
              <MyHeader />
          </Header>
          <Content>
              <Route path={'/'} component={Home} />
          </Content>
          <Footer className={style.footer}>
              <MyFooter />
          </Footer>
      </Layout>
  )
}

export default App
