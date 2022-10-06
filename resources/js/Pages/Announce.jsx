import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styles from '../../css/header.module.scss'
import EmailIcon from '@mui/icons-material/Email';

function Announce(props) {

    const [datas,setData]= useState()
    const [iconDisplay,setIconDisplay] = useState(true)
    const [read,setRead] = useState(true)

    const userId = props.info.id

    const ClickBlock = () => {
        setIconDisplay(!iconDisplay)
        console.log("クリックされました")
    }

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/announcement/${userId}`)
            .then((res) => {
                console.log(res.data)
                setData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    },[])

    // 未読通知があるときは未読マークをつける
    // 未読通知がある場合はreadJudgementに変数をいれて
    // useEffectを起動させる
    const result = datas?.some((item) => item.pivot.read === 0 )
    if(!result){
        var readJudgement = 1
    }
    useEffect(() => {
        setRead(!read)
    },[readJudgement])

    // 通知があるか判定
    const resultBlank =  datas?.some((item) => item.id)

    return (
        <div>
            <EmailIcon className={styles.size} onClick={ClickBlock} />
            { read ?
                <div className={styles.unread}></div>
                :
                ''
            }
            { iconDisplay ?
                ''
                :
                <div className={styles.announceList}>
                { datas?.map((data,index) => 
                    <div key={index} className={styles.announceItem}>
                        <div className={styles.title}>{ data.title }</div>
                        <div>{ data.description }</div>
                        { data.pivot.read === 0 ?
                            ''
                            :
                            <div className={styles.noread}></div>
                        }
                    </div>
                ) }
            </div>
            }
        </div>
    )
}

export default Announce