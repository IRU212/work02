import axios from 'axios'
import React, { useState } from 'react'

function Login() {

    const [name,setName] = useState()
    const [password,setPassword] = useState()

    const ClickLogin = () => {
        if ( name == "iru212" && password == "ryuuya2121b") {
            window.location.href = "http://localhost:8000/api/admin/login/post";
        } else {
            window.alert("ユーザ名かパスワードが違います")
        }
    }

    const ChangeName = (e) => {
        setName(e.target.value)
    }

    const ChangePassword = (e) => {
        setPassword(e.target.value)
    }

    return (
        <div>
            <div><input type="text" placeholder='ユーザ名' value={name} onChange={ChangeName} /></div>
            <div><input type="text" placeholder='パスワード' value={password} onChange={ChangePassword} /></div>
            <div onClick={ClickLogin}>ログイン</div>
        </div>
    )
}

export default Login