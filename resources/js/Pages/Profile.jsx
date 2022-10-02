import React from 'react'
import styles from '../../css/profile.module.scss'
import Header from './Header'
import ProductItemList from './ProductItemList'
import ProductList from './ProductList'

function Profile(props) {
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
                    <img src={`http://localhost:8000/${props.auth.user.image}`} alt="" />
                </div>
                <div className={styles.profileText}>
                    <div className={styles.profileName}>
                        aaa
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile