import React, { useState } from 'react'
import Header from './Header'
import styles from '../../css/post.module.scss'
import axios from 'axios'

function Post() {

    const [name,setName] = useState()
    const [introduce,setIntroduce] = useState()
    const [image,setImage] = useState()
    const [genre,setGenre] = useState()
    const [price,setPrice] = useState()
    const review = 6

    const handleChangeName = (e) => {
        setName(e.target.value)
    }

    const handleChangeIntroduce = (e) => {
        setIntroduce(e.target.value)
    }

    const handleChangeImage = (e) => {
        setImage(e.target.files[0])
    }

    const handleChangeGenre = (e) => {
        setGenre(e.target.value)
    }

    const handleChangePrice = (e) => {
        setPrice(e.target.value)
    }

    const PostClick = () => {
        
        const data = new FormData()
        data.append("name",name)
        data.append("introduce",introduce)
        data.append("image",image)
        data.append("genre",genre)
        data.append("price",price)
        data.append("review",review)
        data.append("user_id",1)

        axios
            .post("http://localhost:8000/api/post/store",data,{
                headers: {
                    'content-type': 'multipart/form-data',
                }
            })
            .then(response => {
                console.log(response);
            })
            .catch((err) => {
                console.log(err)
            })

    }

    return (
        <div className={styles.post}>
            <Header />
            <form>
                <div><input type="text" placeholder='name' onChange={handleChangeName} /></div>
                <div><input type="text" placeholder='introduce' onChange={handleChangeIntroduce} /></div>
                {/* <div><input type="text" placeholder='image' onChange={handleChangeImage} /></div> */}
                <div><input type="file" accept='image/*' multiple onChange={handleChangeImage} /></div>
                <div>
                {/* 1,ゲーム 2,PC 3, 電化製品 4,グッズ 5,食料 6, 服 7, 漫画 8,グッズ　9, その他 */}
                    <select onChange={handleChangeGenre}>
                        <option value="1">ゲーム</option>
                        <option value="2">PC</option>
                        <option value="3">電化製品</option>
                        <option value="4">グッズ</option>
                        <option value="5">食料</option>
                        <option value="6">服</option>
                        <option value="7">漫画</option>
                        <option value="8">グッズ</option>
                        <option value="9">その他</option>
                    </select>
                </div>
                <div><input type="text" placeholder='price' onChange={handleChangePrice} /></div>
                <div><button onClick={PostClick}>投稿</button></div>
            </form>
        </div>
    )
}

export default Post