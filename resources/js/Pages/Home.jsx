import React from 'react'
import Header from './Header'
import ProductList from './ProductList'
import Chat from './Chat'
import styles from '../../css/content.module.scss'
import Search from './Search'
import SideHeader from './SideHeader'


function Home(props) {
    return (
        <div className={styles.body}>
            <Header
                info={ props.auth.user }
            />
            <ProductList />
        </div>
    )
}

export default Home