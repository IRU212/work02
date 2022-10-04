import React, { useEffect, useState } from 'react'
import Header from './Header'
import styles from '../../css/profile.module.scss'
import axios from 'axios'

function Following(props) {

    const  userId = props.auth.user.id
    const  [datas,setData] = useState()

    const Id = props.ziggy.location
    const str = Id
    const result = str.split('/');
    const dataId = result[4]

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/followHome/${dataId}`)
            .then((res) => {
                setData(res.data)
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    },[])

    return (
        <div className={styles.Following}>
            <Header
                info={ props.auth.user }
            />
            <div className={styles.FollowingDiv}>
                <div>
                    { datas?.followUser.map((data,index) => 
                        <div key={index} className={styles.followList}>
                            <a href={`http://localhost:8000/profile/${data.id}`} className={styles.iconBack}><img src={`http://localhost:8000/${data.image}`} alt="" /></a>
                            <div className={styles.name}>{ data.name }</div>
                        </div>
                    ) }    
                </div>
            </div>
        </div>
    )
}

export default Following