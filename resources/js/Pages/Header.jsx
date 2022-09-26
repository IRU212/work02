import React from 'react'
import { useState } from 'react';

import styles from '../../css/header.module.scss'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Header() {

    const [ text,setText ] = useState()

    const handleTextChange = (e) => {
        setText(e.target.value)
    }

    return (
        <div className={styles.header}>
            <div href='http://localhost:8000'>
                Home
            </div>
            <from className={styles.formDiv}>
                <button className={styles.buttonImg} ><img width={24} height={24} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTliEHR87W0oPjpBMR6U9HkbxrOJqBq0WGNoqIynxY&s" alt="" /></button>
                <input className={styles.searchInput} type="text" value={text} onChange={handleTextChange} />
            </from>
            <div className={styles.cartIcon}>
                <ShoppingCartIcon />
            </div>
        </div>
    )
}

export default Header