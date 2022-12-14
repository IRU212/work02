import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styles from '../../css/content.module.scss'
import ChatPost from './ChatPost'

function Chat(props) {

    const [datas,setData] = useState()
    const [moreButtonDisplay,setMoreButtonDisplay] = useState(true)

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/chat")
            .then((res) => {
                setData(res.data)
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    },[])

    const results = datas?.filter( data => {
        return data.product_id == props.info.dataProductId
    } )

    const ClickMoreButtonToggle = () => {
        setMoreButtonDisplay(!moreButtonDisplay)
    }

    // チャットの数
    const chatCount = datas?.filter( data => {
        return data.product_id == props.info.dataProductId
    } ).length

    console.log(chatCount)
    
    if (results?.length == 0) {
        var data = "チャットがありません"
    }

    return (
        <div className={styles.Chat}>
            <ChatPost
                info={{ dataProductId: props.info.dataProductId, dataUserId: props.info.dataUserId }}
            />
            <details>
                <summary className={styles.details}>
                    { results?.map((data,index) => {
                        if ( index < 3) {
                            if (data.user_id == props.info.dataUserId) {
                                return(
                                    <div className={styles.ChatWidthTrue}>
                                        <a href={`http://localhost:8000/profile/${data.user_id}`}>
                                            <img src={`http://localhost:8000/${data.image}`} alt="" />
                                        </a>
                                        <div key={index} className={styles.ChatTrue}>
                                            { data.text }
                                        </div>
                                    </div>
                                )
                            } else {
                                return(
                                    <div className={styles.ChatWidthFalse}>
                                        <a href={`http://localhost:8000/profile/${data.user_id}`}>
                                            <img src={`http://localhost:8000/${data.image}`} alt="" />
                                        </a>
                                        <div key={index} className={styles.ChatFalse}>
                                            { data.text }
                                        </div>
                                    </div>
                                )
                            }
                        }
                    }) }
                    { chatCount < 4 ?
                        ''
                        :
                        <div className={`${moreButtonDisplay ? styles.moreButtonBlock : styles.moreButtonNone}`} onClick={ClickMoreButtonToggle}>
                            もっと見る
                        </div>
                    }
                </summary>
                { results?.map((data,index) => {
                        if ( index > 2) {
                            if (data.user_id == props.info.dataUserId) {
                                return(
                                    <div className={styles.ChatWidthTrue}>
                                        <a href={`http://localhost:8000/profile/${data.user_id}`}>
                                            <img src={`http://localhost:8000/${data.image}`} alt="" />
                                        </a>
                                        <div key={index} className={styles.ChatTrue}>
                                            { data.text }
                                        </div>
                                    </div>
                                )
                            } else {
                                return(
                                    <div className={styles.ChatWidthFalse}>
                                        <a href={`http://localhost:8000/profile/${data.user_id}`}>
                                            <img src={`http://localhost:8000/${data.image}`} alt="" />
                                        </a>
                                        <div key={index} className={styles.ChatFalse}>
                                            { data.text }
                                        </div>
                                    </div>
                                )
                            }
                        }
                    }) }
            </details>
    </div>
    )
}

export default Chat