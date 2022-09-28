import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from '@inertiajs/inertia-react';
import styles from '../../css/content.module.scss'
import Welcome from './Welcome';

function ProductList(props) {

    const [datas,setData] = useState()
 
    useEffect(() => {
        axios
            .get("http://localhost:8000/api/home")
            .then((res) => {
                setData(res.data)
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    },[])

    return (
        <div className={styles.productList}>
            {/* <div>
                <Link
                    href={route('logout')}
                    method="post"
                    as="button">
                    ログアウト
                </Link>
            </div> */}
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