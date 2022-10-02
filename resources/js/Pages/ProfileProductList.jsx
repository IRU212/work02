import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styles from '../../css/profile.module.scss'

function ProfileProductList(props) {

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

    const results =  datas?.filter( result => {
        return result.user_id == props.info
    } )

    return (
        <div className={styles.ProfileProductList}>
            <div className={styles.ProfileProductListFont}>出品した商品</div>
            <div className={styles.flex}>
                { results?.map((data,index) => 
                    <div key={index} className={styles.productImg}>
                        <a href={`http://localhost:8000/home/${data.id}`}>
                            <img src={`http://localhost:8000/${data.image}`} alt="" />
                        </a>
                    </div>
                ) }
            </div>
        </div>
    )
}

export default ProfileProductList