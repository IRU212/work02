import React from 'react'
import styles from '../../../css/admin.module.scss'
import AdminHeader from './AdminHeader'

function AdminHome() {
    return (
        <div className={styles.admin}>
            <AdminHeader />
            <div className={styles.main}>main</div>
        </div>
    )
}

export default AdminHome