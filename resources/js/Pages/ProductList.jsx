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
            { datas?.map((data,index) => 
                <a href={`http://localhost:8000/home/${data.id}`} key={index}>
                    { data?.stock == 0 ?
                        <div className={styles.item}>
                            <img src={ data.image } className={styles.Img} alt="aa" />
                            <div className={styles.SoldOutFont}>Sold Out</div>
                        </div>
                        :
                        <div className={styles.item}>
                            <img src={ data.image } alt="aa" />
                        </div>
                    }
                </a>
            ) }
                        { datas?.map((data,index) => 
                <a href={`http://localhost:8000/home/${data.id}`} key={index}>
                    { data?.stock == 0 ?
                        <div className={styles.item}>
                            <img src={ data.image } className={styles.Img} alt="aa" />
                            <div className={styles.SoldOutFont}>Sold Out</div>
                        </div>
                        :
                        <div className={styles.item}>
                            <img src={ data.image } alt="aa" />
                        </div>
                    }
                </a>
            ) }
                        { datas?.map((data,index) => 
                <a href={`http://localhost:8000/home/${data.id}`} key={index}>
                    { data?.stock == 0 ?
                        <div className={styles.item}>
                            <img src={ data.image } className={styles.Img} alt="aa" />
                            <div className={styles.SoldOutFont}>Sold Out</div>
                        </div>
                        :
                        <div className={styles.item}>
                            <img src={ data.image } alt="aa" />
                        </div>
                    }
                </a>
            ) }
                        { datas?.map((data,index) => 
                <a href={`http://localhost:8000/home/${data.id}`} key={index}>
                    { data?.stock == 0 ?
                        <div className={styles.item}>
                            <img src={ data.image } className={styles.Img} alt="aa" />
                            <div className={styles.SoldOutFont}>Sold Out</div>
                        </div>
                        :
                        <div className={styles.item}>
                            <img src={ data.image } alt="aa" />
                        </div>
                    }
                </a>
            ) }
                        { datas?.map((data,index) => 
                <a href={`http://localhost:8000/home/${data.id}`} key={index}>
                    { data?.stock == 0 ?
                        <div className={styles.item}>
                            <img src={ data.image } className={styles.Img} alt="aa" />
                            <div className={styles.SoldOutFont}>Sold Out</div>
                        </div>
                        :
                        <div className={styles.item}>
                            <img src={ data.image } alt="aa" />
                        </div>
                    }
                </a>
            ) }
                        { datas?.map((data,index) => 
                <a href={`http://localhost:8000/home/${data.id}`} key={index}>
                    { data?.stock == 0 ?
                        <div className={styles.item}>
                            <img src={ data.image } className={styles.Img} alt="aa" />
                            <div className={styles.SoldOutFont}>Sold Out</div>
                        </div>
                        :
                        <div className={styles.item}>
                            <img src={ data.image } alt="aa" />
                        </div>
                    }
                </a>
            ) }
        </div>
    )
}

export default ProductList