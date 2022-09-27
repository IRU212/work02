// MyComponents.js
import React,{ useEffect,useCallback,useState }  from 'react';
import styles from '../../css/header.module.scss'


// 子コンポーネント（モーダル）
function Modal(props){

  return(
      <div id="modal" className="modal" onClick={(event)=>{event.stopPropagation()}}>
        <div>
          <div className={styles.modalCover}>
            <div className={styles.mainFont}>カテゴリー</div>
            <div><a href='http://localhost:8000/' className={styles.sideLink}>ゲーム</a></div>
            <div><a href='http://localhost:8000/' className={styles.sideLink}>電化製品</a></div>
            <div><a href='http://localhost:8000/' className={styles.sideLink}>グッズ</a></div>
            <div><a href='http://localhost:8000/' className={styles.sideLink}>食料</a></div>
            <div><a href='http://localhost:8000/' className={styles.sideLink}>服</a></div>
            <div><a href='http://localhost:8000/' className={styles.sideLink}>漫画</a></div>
            <div><a href='http://localhost:8000/' className={styles.sideLink}>グッズ</a></div>
            <div><a href='http://localhost:8000/' className={styles.sideLink}>その他</a></div>
            {/* <button onClick={props.onClick}>閉じるボタン</button> */}
          </div>
        </div>
      </div>
  )
}


// 親コンポーネント
export default function SideHeader(){

  const[isModalOpen,setIsModalOpen] = useState(false)

  const closeModal= useCallback(() => {
    setIsModalOpen(false)
    document.removeEventListener('click',closeModal)
  },[])

  useEffect(()=>{
    return ()=>{
      document.removeEventListener('click',closeModal)
    }
  },[closeModal])


  function openModal(event){
    setIsModalOpen(true)
    document.addEventListener('click',closeModal)
    event.stopPropagation()
  }


  return (
    <div className="modalpage">
      <div onClick={(event)=>{openModal(event)}}>
        <div className={styles.sideHeaderOpen}>
            <div></div>
            <div></div>
            <div></div>
        </div>
      </div>

      {isModalOpen ? <Modal onClick={(event)=>{closeModal(event)}}/> : ""}

    </div>
  );
}
