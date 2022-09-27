// MyComponents.js
import React,{ useEffect,useCallback,useState }  from 'react';
import styles from '../../css/header.module.scss'


// 子コンポーネント（モーダル）
function Modal(props){

  return(
      <div id="modal" className="modal" onClick={(event)=>{event.stopPropagation()}}>
        <div>
          <p>モーダル</p>
          <button onClick={props.onClick}>閉じるボタン</button>
        </div>
      </div>
  )
}


// 親コンポーネント
export default function SideHeader(){

  const[isModalOpen,setIsModalOpen]=useState(false)

  const closeModal= useCallback(() =>{
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
      <button onClick={(event)=>{openModal(event)}}>モーダルを開く</button>

      {isModalOpen? <Modal onClick={(event)=>{closeModal(event)}}/> :""}

    </div>
  );
}
