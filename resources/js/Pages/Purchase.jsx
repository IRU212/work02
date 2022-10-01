import axios from 'axios'
import React from 'react'

import React, { useState } from 'react'
import styles from '../../css/cart.module.scss'

function Purchase(props) {

    const PostDelete = () => {

        const userId = props.info
        
        const data = new FormData()
        data.append("user_id",userId)

        axios
            .post(`http://localhost:8000/api/cart/delete`,data)
    
    }

    // const [productId,setProductId] = useState()

    const PostCart = () => {

        const data = new FormData()
        data.append("user_id",2)
        data.append("product_id",3)

        axios
            .post("http://localhost:8000/api/purchase/store",data)

            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => {

                console.log(err)
                console.log(err.data)
            })
    }

    return (
        <div>  
            <div className={styles.purchaseButton} onClick={PostDelete}>
            <div className={styles.purchaseButton} onClick={PostCart}>
                <a href="http://localhost:8000">購入する</a>
            </div>
            </div>
        </div>
    )
}

export default Purchase