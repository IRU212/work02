import React from 'react'
import Header from './Header'
import ProductList from './ProductList'

import styles from '../../css/content.module.scss'

function Home() {
    return (
        <div className={styles.body}>
            <Header />
            <ProductList />
        </div>
    )
}

export default Home