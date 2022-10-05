import React, { useEffect, useState } from 'react'

import Header from './Header'
import styles from '../../css/content.module.scss'
import axios from 'axios'
import Chat from './Chat'
import ProductItemList from './ProductItemList'
import CartPost from './CartPost'
import Like from './Like'
import Review from './Review'

function HomeListDetail(props) {

    const [data,setData] = useState()
    const [quantity,setQuantity] = useState(1)

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

    const ClickOrderPost = () => {

        const data = new FormData()
        data.append("quantity",quantity)
        data.append("product_id",productId)

        axios
            .post(`http://localhost:8000/api/order/store`,data)
            .catch((err) => {
                console.log(err)
            })
    }

    const numberChange = (e) => {
        setQuantity(e.target.value)
    }

    if ( data?.stock < 1 ) {
        var stockJudgement = true
    } else {
        var stockJudgement = false
    }

    console.log(data?.id)

    const productId = data?.id

    return (
        <div className={styles.body}>
            <Header
                info={ props.auth.user }
            />
            <div className={styles.HomeListDetail}>
                <div className={styles.HomeListDetailName}>{ data?.name }</div>
                <div className={styles.HomeListDetailImgBack}>
                    { stockJudgement ?
                        <div className={styles.SoldOutFont}>Sold Out</div>
                        :
                        ''
                    }
                    <img src={`http://localhost:8000/${ data?.image }`} alt="" />
                    <div className={styles.heartPosition}>
                        <Like
                            info={{ dataProductId: dataId, dataUserId: props.auth.user.id, }}
                        />
                    </div>
                </div>
                <div className={styles.HomeListDetailText}>
                    <div className={styles.introduce}>{ data?.introduce }</div>
                    <div className={styles.price}>{ data?.price }円</div>
                    <div><Review /></div>
                    <div className={styles.cartPosition} onClick={ClickOrderPost}>
                        {/* 在庫が0のときは購入ボタンを表示しない */}
                        { stockJudgement ?
                            ''
                            :
                            <div>
                                <div>
                                    <input type="number" min="0" max={ data?.stock } value={quantity} onChange={numberChange} />
                                </div>
                                <CartPost
                                    info={{ dataProductId: dataId, dataUserId: props.auth.user.id,quantity: quantity }}
                                />
                            </div>
                        }
                    </div>
                    <div>
                        <Chat
                            info={{ dataProductId: dataId, dataUserId: props.auth.user.id }}
                        />
                    </div>
                </div>
            </div>
            <ProductItemList />
        </div>
    )
}

export default HomeListDetail