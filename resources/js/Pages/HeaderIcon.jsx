import { Link } from '@inertiajs/inertia-react'
import React from 'react'
import styles from '../../css/header.module.scss'

function HeaderIcon(props) {
    return (
        <div className={styles.headerIcon}>
            <img src="https://i.pinimg.com/originals/e5/77/9c/e5779c2869091ffc4327d62d3ecd3e41.png" alt="" />
            <div className={styles.iconLink}>
                <div>{ props.info.name }</div>
                <div>{ props.info.email }</div>
                <div>
                    <Link
                        href={route('logout')}
                        method="post"
                        as="button">
                        ログアウト
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HeaderIcon