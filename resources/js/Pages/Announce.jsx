import axios from 'axios'
import React, { useEffect, useState } from 'react'
import EmailIcon from '@mui/icons-material/Email';

function Announce(props) {

    const [datas,setData]= useState()

    const userId = props.info.id

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/announcement/${userId}`)
            .then((res) => {
                console.log(res.data)
                setData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    },[])

    return (
        <div>
            <EmailIcon />
        </div>
    )
}

export default Announce