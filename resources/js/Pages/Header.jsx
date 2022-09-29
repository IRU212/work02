import React from 'react'
import { useState } from 'react';

import styles from '../../css/header.module.scss'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Search from './Search';
import SideHeader from './SideHeader';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import HeaderIcon from './HeaderIcon';

function Header(props) {

    const [ text,setText ] = useState()

    const handleTextChange = (e) => {
        setText(e.target.value)
    }

    return (
        <div className={styles.header}>
            <div className={styles.sideHeader}>
                <SideHeader/>
            </div>
            <a className={styles.headerLink} href='http://localhost:8000'>
                Home
            </a>
            <Search />
            <div className={styles.PostIcon}>
                <a href="http://localhost:8000/post">
                    <AddCircleIcon className={styles.iconSize} />
                </a>
            </div>
            <div className={styles.cartIcon}>
                <a href="http://localhost:8000/cartlist">
                    <ShoppingCartIcon className={styles.iconSize} />
                </a>
            </div>
            <div className={styles.UserIcon}>
                <HeaderIcon
                    info={ props.info }
                />
            </div>
        </div>
    )
}

export default Header