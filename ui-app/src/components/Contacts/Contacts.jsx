import React from "react"
import style from './Contacts.module.scss'
import EditOutlined from "@ant-design/icons/lib/icons/EditOutlined";
import PhoneOutlined from "@ant-design/icons/lib/icons/PhoneOutlined";
import MailOutlined from "@ant-design/icons/lib/icons/MailOutlined";

const Contacts = () => {
    return (
        <div className={style.contacts}>
            <div>
                <img src="https://sun9-2.userapi.com/impg/CDRE6FuhLC77a7oq_B4h8bLZAPASQhrTqJbVnw/x3cBUVhLNRI.jpg?size=810x1080&quality=96&sign=7c59ec2883fa29a9a79d2cb9441c2b17&type=album"/>
                <div>
                    <h2>Захар Петрушин</h2>
                    <div><EditOutlined /> Группа ИУ3-31Б</div>
                    <div><PhoneOutlined /> 8 961 106 18 46</div>
                    <div><MailOutlined /> zakhar.production@gmail.com</div>
                </div>
            </div>
        </div>
    )
}

export default Contacts