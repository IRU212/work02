import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from './Header'
import styles from '../../css/cart.module.scss'
import Purchase from './Purchase'

function CartList(props) {

    const [datas,setData] = useState()

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/cart")
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    },[])

    const results = datas?.filter( result => {
        return result.list_user_id == props.auth.user.id
    } )

    return (
        <div className={styles.cartList}>
            <Header
                info={ props.auth.user }
            />
            <div className={styles.ListItem}>
                { results?.map((data,index) => 
                    <div key={index} className={styles.ItemBorderDiv}>
                        <div className={styles.ImgDiv}><img src={data.image} alt="" /></div>
                        <div className={styles.textDiv}>
                            <div className={styles.nameFont}>{ data.name }</div>
                            <div className={styles.introduceFont}>{ data.introduce }</div>
                        </div>
                    </div>
                ) }
            </div>
            <Purchase
                info={ props.auth.user.id }
            />
        </div>
    )
}

export default CartList