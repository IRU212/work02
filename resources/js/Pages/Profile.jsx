import React from 'react'
import styles from '../../css/profile.module.scss'
import Header from './Header'

function Profile(props) {
    return (
        <div className={styles.profile}>
            <Header
                info={ props.auth.user }
            />
        </div>
    )
}

export default Profile