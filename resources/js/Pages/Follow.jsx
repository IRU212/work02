import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styles from '../../css/profile.module.scss'

function Follow(props) {

    const [datas,setData] = useState()
    const userId = props.info

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/followHome/${userId}`)
            .then((res) => {
                setData(res.data)
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    },[userId])

    return (
        <div className={styles.Folllow}>
            <a href={`http://localhost:8000/following/${userId}`}>
                { datas?.folloCount }フォロー
            </a>
            <a href={`http://localhost:8000/follower/${userId}`}>
                { datas?.followerCount }フォローワー
            </a>
        </div>
    )
}

export default Follow