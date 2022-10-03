import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styles from '../../css/content.module.scss'

function Like(props) {

    const [data,setData] = useState()

    const userId = props.info.dataUserId
    const productId = props.info.dataProductId

    useEffect(() => {
        axios
            // .get(`http://localhost:8000/api/likeHome/${userId}/${productId}`)
            .get(`http://localhost:8000/api/likeHome/${userId}/${productId}`)
            .then((res) => {
                setData(res.data)
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    },[])

    const ClickLike = () => {
        axios
            .post(`http://localhost:8000/api/like/${userId}/${productId}`)
            .catch((err) => {
                console.log(err)
        })
    }

    const ClickUnLike = () => {
        axios
            .post(`http://localhost:8000/api/unlike/${userId}/${productId}`)
            .catch((err) => {
                console.log(err)
        })
    }

    return (
        <div className={styles.Like}>
            <div>
                { data ? 
                    <div onClick={ClickUnLike} className={styles.LikeButton}>
                        Like
                    </div> 
                    : 
                    <div onClick={ClickLike} className={styles.UnLikeButton}>
                        UnLike
                    </div> 
                }
            </div>
        </div>
    )
}

export default Like