import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styles from '../../css/content.module.scss'
import Header from './Header'

function LikeProduct(props) {

    const [datas,setData] = useState()
    const userId = props.auth.user.id

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/like/${userId}`)
            .then((res) => {
                setData(res.data)
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    },[])

    return (
        <div className={styles.LikeProduct}>
            <Header
                info={ props.auth.user }
            />
            <div className={styles.LikeProductPadding}>
                { datas?.map((data,index) => 
                    <div key={index} className={styles.ImgBack}>
                        <a href={`http://localhost:8000/home/${data?.id}`}>
                            <img src={`http://localhost:8000/${data?.image}`} alt="image" />
                        </a>
                    </div>
                ) }
            </div>
        </div>
    )
}

export default LikeProduct