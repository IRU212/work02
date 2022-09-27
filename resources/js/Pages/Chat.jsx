import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styles from '../../css/content.module.scss'

function Chat(props) {

    const [datas,setData] = useState()

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/chat")
            .then((res) => {
                setData(res.data)
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    },[])

    console.log(props)

    const results = datas?.filter( data => {
        return data.product_id == props.info.dataProductId
    } )

    return (
        <div>
            { results?.map((data,index) => {
                if (data.user_id == props.info.dataUserId) {
                    return(
                        <div key={index}>
                            true
                        </div>
                    )
                } else {
                    return(
                        <div key={index}>
                            false
                        </div>
                    )
                }
            }) }
    </div>
    )
}

export default Chat