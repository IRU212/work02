import React, { useState } from 'react'
import Header from './Header'

import styles from '../../css/cart.module.scss'
import axios from 'axios'

function CartPost(props) {

    const productId = props.info.dataProductId
    const userId = props.info.dataUserId
    const quantity = props.info.quantity

    const ClickCartSave = () => {

        axios
            .post("http://localhost:8000/api/cart/store",{
                product_id: productId,
                user_id: userId,
                quantity: quantity
            })
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err.data)
            })
        
        // orderdetailsに入れる
        // axios
        //     .post("http://localhost:8000/api/orderdetail/store",{
        //         product_id: productId,
        //         quantity: quantity
        //     })
        //     .then((res) => {
        //         console.log(res.data)
        //     })
        //     .catch((err) => {
        //         console.log(err.data)
        //     })
    }

    return (
        <div>
            <button onClick={ClickCartSave}>カートに入れる</button>
        </div>
    )
}

export default CartPost