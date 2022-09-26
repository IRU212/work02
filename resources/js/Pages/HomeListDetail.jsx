import React, { useEffect, useState } from 'react'

import Header from './Header'
import styles from '../../css/content.module.scss'
import axios from 'axios'

function HomeListDetail(props) {

    const [data,setData] = useState()

    const Id = props.ziggy.location
    const str = Id
    const result = str.split('/');
    const dataId = result[4]

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/home/${dataId}`)
            .then((res) => {
                setData(res.data)
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    },[])

    return (
        <div className={styles.body}>
            <Header />
            <div className={styles.HomeListDetail}>
                <div className={styles.HomeListDetailName}>{ data?.name }</div>
                <div className={styles.HomeListDetailImgBack}><img src={ data?.image } alt="" /></div>
                <div className={styles.HomeListDetailText}>
                    <div className={styles.introduce}>{ data?.introduce }</div>
                    <div className={styles.price}>{ data?.price }円</div>
                </div>
            </div>
        </div>
    )
}

export default HomeListDetail