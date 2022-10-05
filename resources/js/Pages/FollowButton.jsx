import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styles from '../../css/profile.module.scss'

function FollowButton(props) {

    const userId = props.info.id
    const profileId = props.profileId

    const [datas,setData] = useState()

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/followHome/${userId}`)
            .then((res) => {
                setData(res.data)
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
        })
    },[])

    const followStatus = datas?.followUser.some( item => item.id == profileId )
    console.log(followStatus)

    function FollowJudgement(){
        return(
            <div>
                { followStatus ? 
                    <div onClick={ClickUnfollow} className={styles.FollowButton}>unfollow</div>
                    :
                    <div onClick={ClickFollow} className={styles.UnfollowButton}>follow</div>
                }
            </div>
        )
    }

    const ClickFollow = () => {
        axios
            .post(`http://localhost:8000/api/follow/${userId}/${profileId}`)
            .then(
                location.reload()
            )
            .catch((err) => {
                console.log(err)
        })
        axios
            .post(`http://localhost:8000/api/announcement/follow/${userId}/${profileId}`)
            .then(
                location.reload()
            )
            .catch((err) => {
                console.log(err)
        })
    }

    const ClickUnfollow = () => {
        axios
            .post(`http://localhost:8000/api/unfollow/${userId}/${profileId}`)
            .then(
                location.reload()
            )
            .catch((err) => {
                console.log(err)
        })
    }

    return (
        <div>
            { userId == profileId ? 
                '' 
                : 
                <FollowJudgement />
            }
        </div>
    )
}

export default FollowButton