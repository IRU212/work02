import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Follow(props) {

    const [datas,setData] = useState()

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/followHome/2/1`)
            .then((res) => {
                setData(res.data)
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    },[])

    return (
        <div>
            Follow
            <div>フォロー数{ datas?.userCount }人</div>
        </div>
    )
}

export default Follow