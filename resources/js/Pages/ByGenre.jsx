import React from 'react'
import Header from './Header'
import styles from '../../css/genre.module.scss'

function ByGenre(props) {
    return (
        <div className={styles.genre}>
            <Header
                info={ props.auth.user }
            />
            ByGenre
        </div>
    )
}

export default ByGenre