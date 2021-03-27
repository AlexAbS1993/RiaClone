import React from 'react'
import classes from './Search.module.css'

export const Search = ({closeModal, inputValue, setInputValue, setSubmitToggle}) => {
    return (
       <div className={classes.wrapper} onMouseDown={closeModal} >
           <div className={classes.modal}>
                <input value={inputValue} onChange={(e)=>{setInputValue(e.target.value)}} placeholder="Введите название статьи" onMouseDown={(e)=>{e.stopPropagation()}}/>
                <button onClick={(e) => {setSubmitToggle(prev => !prev)}} onMouseDown={(e)=>{e.stopPropagation()}}>Поиск</button>
           </div>
       </div>
    )
}