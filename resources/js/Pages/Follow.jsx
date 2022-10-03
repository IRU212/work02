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
            <div>Follow</div>
            <div>フォロー数{ datas?.folloCount }人</div>
            <div>フォロー一覧</div>
            <div>
                { datas?.followUser.map((data,index) => 
                    <div key={index}>
                        { data.name }
                    </div>
                ) }
            </div>
            <div>Follower</div>
            <div>フォローワー数{ datas?.followerCount }人</div>
            <div>
                { datas?.followerUser.map((data,index) => 
                    <div key={index}>
                        { data.name }
                    </div>
                ) }
            </div>
        </div>
    )
}

export default Follow