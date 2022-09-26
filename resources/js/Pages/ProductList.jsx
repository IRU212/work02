import axios from 'axios'
import React, { useState } from 'react'

import styles from '../../css/content.module.scss'

function ProductList() {

    const [datas,setData] = useState()

    axios
        .get("http://localhost:8000/api/home")
        .then((res) => {
            setData(res.data)
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err)
        },[])

    return (
        <div className={styles.productList}>
            { datas?.map((data,index) => 
                <a href={`http://localhost:8000/home/${data.id}`} className={styles.item} key={index}>
                    <img src={ data.image } alt="aa" />
                </a>
            ) }
            { datas?.map((data,index) => 
                <div className={styles.item} key={index}>
                    <img src={ data.image } alt="aa" />
                </div>
            ) }
            { datas?.map((data,index) => 
                <div className={styles.item} key={index}>
                    <img src={ data.image } alt="aa" />
                </div>
            ) }
        </div>
    )
}

export default ProductList