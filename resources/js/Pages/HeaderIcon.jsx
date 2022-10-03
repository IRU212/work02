import { Link } from '@inertiajs/inertia-react'
import React, { useState } from 'react'
import styles from '../../css/header.module.scss'

function HeaderIcon(props) {

    const [iconToggleClassName,setIconToggleClassName] = useState(false)

    const ClickClassTogle = () => {
        setIconToggleClassName(!iconToggleClassName)
    }

    return (
        <div className={styles.headerIcon}>
            <div onClick={ClickClassTogle}>
                <img src={`http://localhost:8000/${ props.info.image }`} alt="icon" />
                <div className={styles.headerIconFont}>▼{ props.info.name }</div>
            </div>
            <div className={`${ iconToggleClassName ? styles.iconLink : styles.iconLinkNone}`}>
                <div>{ props.info.name }</div>
                <div>{ props.info.email }</div>
                <div><a href={`http://localhost:8000/profile/${ props.info.id }`}>プロフィール</a></div>
                <div><a href={`http://localhost:8000/like/${ props.info.id }`}>いいねした商品</a></div>
                <div>
                    <Link
                        href={route('logout')}
                        method="post"
                        className={styles.logoutButton}
                        as="button">
                        ログアウト
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HeaderIcon