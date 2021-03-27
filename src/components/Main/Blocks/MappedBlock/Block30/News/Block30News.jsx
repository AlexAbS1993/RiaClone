import React from 'react'
import { News } from '../../Block21/News'
import classes from '../Block30.module.css'

export const Block30News = ({news}) => {
    const newsRender = news.map((e,i) => {
        return <News title={e.title} time={e.time}/>
    })
    return (
        <div className={classes.newsBlock}>
            {newsRender}
        </div>
    )
}