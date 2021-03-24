import classes from './News.module.css'
import React, { useEffect, useRef, useState } from 'react'
import { NewsDetail } from './NewsDetail'

export const News = ({isOpen}) => {
    const [news, setNews] = useState([])
    const [newsCount, setNewsCount] = useState(5)
    const newsRef = useRef()
 // Читаем скроллы 
    useEffect(() => {
        function onScroll(){
            if (this.scrollHeight - (this.scrollTop + this.clientHeight) < 40){
                setNewsCount(prev => prev + 1)
            }
        }
        newsRef.current.addEventListener("scroll", onScroll)
        return () => newsRef.current.removeEventListener("scroll", onScroll)
    }, [])

 // Запрос новостей в ленту
    useEffect(() => {
        console.log(newsCount)
        switch (isOpen){
            case false: {
                setNews([{title: "Россия и Мадагаскар подписали пакт о ненападении", time:"22:00"}, {title: "Посол Замбии в ЮАР отравился несвежими мандаринами", time:"23:20"}])
                break
            }
            case true: {
                let arr = []
                for (let i = 0; i < newsCount; i++){
                    arr.push(...[{title: "Россия и Мадагаскар подписали пакт о ненападении", time:"22:00"}, {title: "Посол Замбии в ЮАР отравился несвежими мандаринами", time:"23:20"}])
                }
                setNews([...arr])
                break
            }
            default: return true
        }
    }, [isOpen, newsCount])
    const newsRender = news.map((e, i) => <NewsDetail title={e.title} time={e.time} isOpen={isOpen} key={i}/>)
    return (
        <div className={isOpen ? classes.wrapperIsOpen : classes.wrapper} ref={newsRef}>
            {newsRender}
        </div>
    )
}