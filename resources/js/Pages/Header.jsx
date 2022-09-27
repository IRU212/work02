import React from 'react'
import { useState } from 'react';

import styles from '../../css/header.module.scss'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Search from './Search';
import SideHeader from './SideHeader';

function Header() {

    const [ text,setText ] = useState()

    const handleTextChange = (e) => {
        setText(e.target.value)
    }

    return (
        <div className={styles.header}>
            <div>
                <SideHeader/>
            </div>
            <a className={styles.headerLink} href='http://localhost:8000'>
                Home
            </a>
            <Search />
            <div className={styles.cartIcon}>
                <a href="http://localhost:8000/cartlist">
                    <ShoppingCartIcon />
                </a>
            </div>
        </div>
    )
}

export default Header