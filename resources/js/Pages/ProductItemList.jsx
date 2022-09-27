import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styles from '../../css/content.module.scss'

function ProductItemList() {

    const [datas,setData] = useState()

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/home")
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    },[])

    return (
        <div className={styles.ProductItemList}>
            { datas?.map((data,index) => 
                <div key={index} className={styles.ItemList}>
                    <a href={`http://localhost:8000/home/${data.id}`}><img className={styles.Item} src={ data.image } alt="" /></a>
                </div>
            ) }
        </div>
    )
}

export default ProductItemList