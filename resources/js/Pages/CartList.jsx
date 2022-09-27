import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from './Header'

function CartList(props) {

    const [datas,setData] = useState()

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/cart")
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    },[])

    const results = datas?.filter( result => {
        return result.list_user_id == props.auth.user.id
    } )

    return (
        <div>
            <Header />
            { results?.map((data,index) => 
                <div key={index}>
                    { data.name }
                    { data.list_user_id }
                </div>
            ) }
        </div>
    )
}

export default CartList