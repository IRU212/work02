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
            <img src="https://i.pinimg.com/originals/e5/77/9c/e5779c2869091ffc4327d62d3ecd3e41.png" onClick={ClickClassTogle} alt="" />
            <div className={`${ iconToggleClassName ? styles.iconLink : styles.iconLinkNone}`}>
                <div>{ props.info.name }</div>
                <div>{ props.info.email }</div>
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