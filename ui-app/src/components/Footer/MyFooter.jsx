import React from "react"
import style from './Footer.module.scss'
import {SearchOutlined} from "@ant-design/icons";
import InstagramOutlined from "@ant-design/icons/lib/icons/InstagramOutlined";
import GithubOutlined from "@ant-design/icons/lib/icons/GithubOutlined";
import TwitterOutlined from "@ant-design/icons/lib/icons/TwitterOutlined";
import WechatOutlined from "@ant-design/icons/lib/icons/WechatOutlined";
import GoogleOutlined from "@ant-design/icons/lib/icons/GoogleOutlined";
import FacebookOutlined from "@ant-design/icons/lib/icons/FacebookOutlined";
import {Field, Formik} from "formik";
import Form from "antd/es/form";
import EnterOutlined from "@ant-design/icons/lib/icons/EnterOutlined";

export const MyFooter = () => {
    return (
        <div className={style.footer}>
            <div className={style.snBlock}>
                <div className={style.item}>
                    <GithubOutlined />
                </div>
                <div className={style.item}>
                    <InstagramOutlined />
                </div>
                <div className={style.item}>
                    <TwitterOutlined />
                </div>
                <div className={style.item}>
                    <WechatOutlined />
                </div>
                <div className={style.item}>
                    <GoogleOutlined />
                </div>
                <div className={style.item}>
                    <FacebookOutlined />
                </div>
            </div>
            <div className={style.form}>
                <Formik
                    initialValues={{ text: '',}}
                    validate={values => {}}
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                        setSubmitting(false)
                        resetForm()
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <Field type="text" name="text"
                                   className={style.text} placeHolder={'Input your advance'}/>
                            <button type="submit" disabled={isSubmitting}>
                                <EnterOutlined />
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}