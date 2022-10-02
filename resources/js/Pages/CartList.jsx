import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from './Header'
import styles from '../../css/cart.module.scss'
import Purchase from './Purchase'
import CartCancel from './CartCancel'

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

    // カート内の合計金額
    const total = results?.reduce((sum,element) => {
        return sum + element.price
    },0)

    if (results?.length == 0) {
        var chatNone = "カートに商品がありません"
    }

    function ResultsNone() {

        return(
            <div>
                {chatNone}
            </div>
        )
    }



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
                            <div>{ data.quantity }個</div>
                            <div className={styles.ButtonDiv}>
                                <CartCancel
                                    cartId = { data.id }
                                />
                                <Purchase
                                    info = { props.auth.user.id }
                                    totalMoney = { total }
                                    quantity = { data.quantity }
                                    price = { data.price }
                                    productId = { data.product_id }
                                    cartId = { data.id }
                                />
                            </div>
                        </div>
                    </div>
                ) }
            </div>
            <div className={styles.CartNone}>
                <ResultsNone />
            </div>
            {/* <div>
                <Purchase
                    info = { props.auth.user.id }
                    totalMoney = { total }
                />
            </div> */}
        </div>
    )
}

export default CartList