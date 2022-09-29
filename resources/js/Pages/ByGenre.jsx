import React, { useEffect, useState } from 'react'
import Header from './Header'
import styles from '../../css/genre.module.scss'
import axios from 'axios'

function ByGenre(props) {

    const [datas,setData] = useState()

    const urlData = props.ziggy.location
    const urlSplite = urlData.split('/')
    const url = urlSplite[4]
    

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/genre/${url}`)
            .then((res) => {
                setData(res.data)
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    },[])

    const genreList = ["ゲーム","電化製品","パソコン","グッズ","食料","服","漫画","グッズ","その他"]
    const genreId = url - 1
    const genre = genreList[genreId]

    return (
        <div className={styles.genre}>
            <Header
                info={ props.auth.user }
            />
            <div className={styles.genreFont}>{ genre }</div>
            <div className={styles.genreDiv}>
                { datas?.map((data,index) => 
                    <div key={index} className={styles.imageDiv}>
                        <a href={`http://localhost:8000/home/${data.id}`}>
                            <img src={`http://localhost:8000/${data.image}`} alt="aaa" />
                        </a>
                    </div>
                ) }
            </div>
        </div>
    )
}

export default ByGenre