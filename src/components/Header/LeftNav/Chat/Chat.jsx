import React from 'react'
import classes from './Chat.module.css'
import { Room } from './Room'

const chats = [
    {users: 20, title: "Сборы средств на восстановление поворота налево"},
    {users: 220, title: "Флудилка"},
    {users: 4, title: "Европа и Россия как участники научно-исследоватской кампании"},
    {users: 2, title: "Женские вопросы о политике"},
    {users: 11, title: "Распродажа обуви в Махачкале"},
]

export const Chat = ({setIsChatOpen}) => {
    let chatsRender = chats.map((e,i) => {
        return <Room title={e.title} users={e.users} key={e.title}/>
    })
    return (
        <div className={classes.wrapper}>
            <div  className={classes.closeChat}><h5><span onClick={()=>{setIsChatOpen(false)}}>X</span> Чаты </h5></div>
            {chatsRender}
            <div className={classes.footer}> <div onClick={()=>{setIsChatOpen(false)}}>^</div></div>
        </div>
    )
}