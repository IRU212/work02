import React, { useEffect, useRef, useState } from 'react'
import styles from '../../css/header.module.scss'

function Search() {

    const [datas,setData] = useState()
    const [searchResults,setSearchResults] = useState(datas)
    const [text,setText] = useState()

    const [resultToggle,setresultToggle] = useState(false)

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/home")
            .then((res) => {
                setData(res.data)
                setSearchResults(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    },[])

    const handleChangeSearchInput = (e) => {
        setText(e.target.value)
        const value = e.target.value.toLowerCase()
        const result = datas?.filter( (data) => {
            return new RegExp(value).test(data.name)
        })
        setSearchResults(result)
    }

    const ClickResultToggle = () => {
        setresultToggle(!resultToggle)
    }
    

    return (
        <div>
            <from className={styles.formDiv}>
                <button className={styles.buttonImg} ><img width={24} height={24} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTliEHR87W0oPjpBMR6U9HkbxrOJqBq0WGNoqIynxY&s" alt="" /></button>
                <input className={styles.searchInput} type="text" value={text} onChange={handleChangeSearchInput} onClick={ClickResultToggle} />
            </from>
            <div className={`${ resultToggle ? styles.resultCover : styles.resultCoverNone}`}>
                <div className={styles.modal}>
                    { searchResults?.map((data,index) => 
                        <a href={`http://localhost:8000/home/${data.id}`}  key={index}>
                            <div className={styles.resultFont}>{ data.name }</div>
                        </a>
                    ) }
                </div>
            </div>
        </div>
    )
}

export default Search