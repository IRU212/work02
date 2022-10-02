import axios from 'axios'
import React, { useState } from 'react'
import styles from '../../css/cart.module.scss'

function Purchase(props) {

    const PostClick = () => {

        const userId = props.info
        const money = props.totalMoney
        
        // カートの中身を削除
        const dataDelete = new FormData()
        dataDelete.append("user_id",userId)

        axios
            .post(`http://localhost:8000/api/cart/delete`,dataDelete)
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
        })

        // ordersに保存
        const detaStore = new FormData()
        detaStore.append("money",money)
        detaStore.append("user_id",userId)

        axios
            .post(`http://localhost:8000/api/order/store`,detaStore)
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
        })
    }


    return (
        <div>  
            <div className={styles.purchaseButton} onClick={PostClick}>
                <a href="http://localhost:8000">購入する</a>
            </div>
        </div>
    )
}

export default Purchase