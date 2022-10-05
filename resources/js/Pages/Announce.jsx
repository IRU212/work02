import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styles from '../../css/header.module.scss'
import EmailIcon from '@mui/icons-material/Email';

function Announce(props) {

    const [datas,setData]= useState()
    const [iconDisplay,setIconDisplay] = useState(true)

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

    return (
        <div>
            <EmailIcon className={styles.size} onClick={ClickBlock} />
            { iconDisplay ?
                ''
                :
                <div className={styles.announceList}>
                { datas?.map((data,index) => 
                    <div key={index} className={styles.announceItem}>
                        <div className={styles.title}>{ data.title }</div>
                        <div>{ data.description }</div>
                    </div>
                ) }
            </div>
            }
        </div>
    )
}

export default Announce