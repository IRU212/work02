import axios from 'axios'
import React, { useState } from 'react'
import styles from '../../css/content.module.scss'

function ChatPost(props) {

    const [text,setText] = useState()

    const productId = props.info.dataProductId
    const UserId = props.info.dataUserId

    const ClickChatPost = () => {

        axios
            .post("http://localhost:8000/api/chat/store",{
                text: text,
                product_id: productId,
                user_id: UserId
            })
            .then(() => {
                console.log("送信成功")
            })
            .catch((err) => {
                console.log(err)
            })

    }

    const handleChangeText = (e) => {
        setText(e.target.value)
    }
    
    return (
        <form className={styles.ChatPost}>
            <input type="text" onChange={handleChangeText} className={styles.inputText} />
            <button onClick={ClickChatPost} className={styles.Button}>送信</button>
        </form>
    )
}

export default ChatPost