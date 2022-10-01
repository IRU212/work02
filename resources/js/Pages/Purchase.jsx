import axios from 'axios'
import React from 'react'
import styles from '../../css/cart.module.scss'

function Purchase(props) {

    const PostDelete = () => {

        const userId = props.info
        
        const data = new FormData()
        data.append("user_id",userId)

        axios
            .post(`http://localhost:8000/api/cart/delete`,data)
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className={styles.purchaseButton} onClick={PostDelete}>
            <a href="http://localhost:8000">購入する</a>
        </div>
    )
}

export default Purchase