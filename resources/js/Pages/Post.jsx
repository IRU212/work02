import React, { useEffect, useRef, useState } from 'react'
import Header from './Header'
import styles from '../../css/post.module.scss'
import axios from 'axios'

function Post(props) {

    const [imageInput,setImageInput] = useState(false)

    // inputデータ
    const [name,setName] = useState()
    const [introduce,setIntroduce] = useState()
    const [image,setImage] = useState()
    const [genre,setGenre] = useState()
    const [price,setPrice] = useState()
    const [number,setNumber] = useState()
    const review = 6

    // 画像プレビュー
    const userImg = useRef()

    // 出品ボタン判定
    const [buttonBlock,setButtonBlock] = useState(true)

    const [nameJudgement,setNameJudgement] = useState(0)
    const [introduceJudgement,setIntroduceJudgement] = useState(0)
    const [imageJudgement,setImageJudgement] = useState(0)
    const [genreJudgement,setGenreJudgement] = useState(0)
    const [priceJudgement,setPriceJudgement] = useState(0)
    const [numberJudgement,setNumberJudgement] = useState(0)
    

    const handleChangeName = (e) => {

        setName(e.target.value)

        // 値がない時はクリックさせない
        // 文字が入力されている時はsetNameJudgement(0)
        if (!e.target.value) {
            setButtonBlock(true)
            setNameJudgement(0)
        } else {
            setNameJudgement(1)
            console.log("文字が入力されています")
        }

        // 文字が入力されている時はresultがtrueを返す
        let array = [nameJudgement,introduceJudgement,imageJudgement,genreJudgement,priceJudgement,numberJudgement];
        let result = array.every(function(val){
            return val == 1;
        });
        if (result) {
            setButtonBlock(false)
        } else {
            setButtonBlock(true)
            console.log("空白です")
        }

    }

    const handleChangeIntroduce = (e) => {
        setIntroduce(e.target.value)

        // 値がない時はクリックさせない
        // 文字が入力されている時はsetNameJudgement(0)
        if (!e.target.value) {
            setButtonBlock(true)
            setIntroduceJudgement(0)
        } else {
            setIntroduceJudgement(1)
            console.log("文字が入力されています")
        }

        // 文字が入力されている時はresultがtrueを返す
        let array = [nameJudgement,introduceJudgement,imageJudgement,genreJudgement,priceJudgement,numberJudgement];
        let result = array.every(function(val){
            return val == 1;
        });
        if (result) {
            setButtonBlock(false)
        } else {
            setButtonBlock(true)
            console.log("空白です")
        }
    }

    const handleChangeImage = (e) => {

        if (!e.target.files.length == 0) {
            setImageInput(!imageInput)
        }

        // 値がない時はクリックさせない
        // 文字が入力されている時はsetNameJudgement(0)
        if (!e.target.files[0]) {
            setButtonBlock(true)
            setImageJudgement(0)
        } else {
            setImageJudgement(1)
            console.log("文字が入力されています")
        }

        // 文字が入力されている時はresultがtrueを返す
        let array = [nameJudgement,introduceJudgement,imageJudgement,genreJudgement,priceJudgement,numberJudgement];
        let result = array.every(function(val){
            return val == 1;
        });
        if (result) {
            setButtonBlock(false)
        } else {
            setButtonBlock(true)
            console.log("空白です")
        }

        // プレビュー
        setImage(e.target.files[0])
        const image = e.target.files[0]
        userImg.current.title = image.name
        const reader = new FileReader()
        reader.onload = (event) => {
            userImg.current.setAttribute('src', event.target.result)
        }
        reader.readAsDataURL(image);
    }

    const handleChangeGenre = (e) => {
        setGenre(e.target.value)

        // 値がない時はクリックさせない
        // 文字が入力されている時はsetNameJudgement(0)
        if (!e.target.value) {
            setButtonBlock(true)
            setGenreJudgement(0)
        } else {
            setGenreJudgement(1)
            console.log("文字が入力されています")
        }

        // 文字が入力されている時はresultがtrueを返す
        let array = [nameJudgement,introduceJudgement,imageJudgement,genreJudgement,priceJudgement,numberJudgement];
        let result = array.every(function(val){
            return val == 1;
        });
        if (result) {
            setButtonBlock(false)
        } else {
            setButtonBlock(true)
            console.log("空白です")
        }
    }

    const handleChangeNumber = (e) => {
        setNumber(e.target.value)

        // 値がない時はクリックさせない
        // 文字が入力されている時はsetNameJudgement(0)
        if (!e.target.value) {
            setButtonBlock(true)
            setNumberJudgement(0)
        } else {
            setNumberJudgement(1)
            console.log("文字が入力されています")
        }

        // 文字が入力されている時はresultがtrueを返す
        let array = [nameJudgement,introduceJudgement,imageJudgement,genreJudgement,priceJudgement,numberJudgement];
        let result = array.every(function(val){
            return val == 1;
        });
        if (result) {
            setButtonBlock(false)
        } else {
            setButtonBlock(true)
            console.log("空白です")
        }
    }

    const handleChangePrice = (e) => {
        setPrice(e.target.value)

        // 値がない時はクリックさせない
        // 文字が入力されている時はsetNameJudgement(0)
        if (!e.target.value) {
            setButtonBlock(true)
            setPriceJudgement(0)
        } else {
            setPriceJudgement(1)
            console.log("文字が入力されています")
        }

        // 文字が入力されている時はresultがtrueを返す
        let array = [nameJudgement,introduceJudgement,imageJudgement,genreJudgement,priceJudgement,numberJudgement];
        let result = array.every(function(val){
            return val == 1;
        });
        if (result) {
            setButtonBlock(false)
        } else {
            setButtonBlock(true)
            console.log("空白です")
        }
    }

    const ClickImgCancel = () => {
        setImageInput(!imageInput)
    }

    const PostClick = () => {
        
        const data = new FormData()
        data.append("name",name)
        data.append("introduce",introduce)
        data.append("image",image)
        data.append("genre",genre)
        data.append("price",price)
        data.append("stock",number)
        data.append("review",review)
        data.append("user_id",props.auth.user.id)

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
            <Header
                info={ props.auth.user }
            />
            <form className={styles.form}>
                <div className={styles.formImgBack}>
                    <div className={styles.imageFile}>
                        { imageInput ?
                            <div className={styles.cancelButton} onClick={ClickImgCancel}>×</div>
                            :
                            <div>
                                <label htmlFor="file_upload" className={styles.label}>ファイルを選択</label>
                                <input type="file" accept='image/*' id='file_upload' multiple onChange={handleChangeImage} />
                            </div>
                        }
                    </div>
                    <img ref={userImg} className={`${ imageInput ? '' : styles.imgNone }`} />
                </div>
                <div className={styles.fomrText}>
                    <div><input type="text" placeholder='商品名' className={styles.inputText} onChange={handleChangeName} /></div>
                    <div><input type="text" placeholder='商品紹介' className={styles.inputIntroducet} onChange={handleChangeIntroduce} /></div>
                </div>
                <div className={styles.Select}>
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
                        <option value="9" selected>その他</option>
                    </select>
                </div>
                <div className={styles.Number}><input type="number" placeholder='出品数' onChange={handleChangeNumber} /></div>
                <div className={styles.Price}><input type="text" placeholder='値段' onChange={handleChangePrice} /></div>
                <div className={styles.PostButton}>
                    { buttonBlock ?
                        <div>
                            出品
                        </div>
                        :
                        <button onClick={PostClick}>
                            出品
                        </button>
                    }
                </div>
            </form>
        </div>
    )
}

export default Post