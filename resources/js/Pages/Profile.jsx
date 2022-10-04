import React, { useEffect, useState } from 'react'
import styles from '../../css/profile.module.scss'
import Follow from './Follow'
import FollowButton from './FollowButton'
import Header from './Header'
import ProfileProductList from './ProfileProductList'

function Profile(props) {

    const [data,setData] = useState()

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/user/${dataId}`)
            .then((res) => {
                setData(res.data)
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
        })
    },[])

    const Id = props.ziggy.location
    const str = Id
    const result = str.split('/');
    const dataId = result[4]

    console.log(props.ziggy.location)

    return (
        <div className={styles.profile}>
            <Header
                info={ props.auth.user }
            />
            <div className={styles.backImg}>
                    <img src="https://www.helloimg.com/images/2021/12/21/G0OMtS.jpg" alt="" />
                </div>
            <div className={styles.intoroduce}>
                <div className={styles.IconImg}>
                    <img src={`http://localhost:8000/${data?.image}`} alt="" />
                </div>
                <div className={styles.profileText}>
                    <div className={styles.profileName}>
                    { data?.name }
                    <FollowButton
                        info={ props.auth.user }
                        profileId={ dataId }
                    />
                    <Follow
                        info={ data?.id }
                    />
                    </div>
                </div>
            </div>
            <ProfileProductList
                info={ data?.id }
            />
        </div>
    )
}

export default Profile