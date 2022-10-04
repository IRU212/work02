import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styles from '../../../css/admin.module.scss'
import AdminHeader from './AdminHeader'

function AdminUser() {

    const [datas,setData] = useState()
 
    useEffect(() => {
        axios
            .get("http://localhost:8000/api/user")
            .then((res) => {
                setData(res.data)
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    },[])

    return (
        <div className={styles.admin}>
            <AdminHeader />
            <div className={styles.main}>
                <div className={styles.mainFont}>ユーザー一覧</div>
                <table>
                    <tr className={styles.trTitle}>
                        <th className={styles.thTitle}>お名前</th>
                        <th className={styles.thTitle}>メールアドレス</th>
                        <th className={styles.thTitle}>作成日</th>
                        <th className={styles.thTitle}>詳細</th>
                    </tr>
                    { datas?.map((data,index) => 
                            <tr key={index} className={styles.trResult}>
                                <th className={styles.thResult}>{ data.name }</th>
                                <th className={styles.thResult}>{ data.email }</th>
                                <th className={styles.thResult}>{ data.created_at }</th>
                                <th className={styles.thResult}>detail</th>
                            </tr>
                        ) }
                </table>
            </div>
        </div>
    )
}

export default AdminUser