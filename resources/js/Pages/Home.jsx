import React from 'react'
import Header from './Header'
import ProductList from './ProductList'
import Chat from './Chat'
import styles from '../../css/content.module.scss'
import Search from './Search'


function Home() {
    return (
        <div className={styles.body}>
            <Header />
            <ProductList />
        </div>
    )
}

export default Home