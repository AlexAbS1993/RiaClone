import React from 'react'
import { NavLink } from 'react-router-dom'
import { Sharing } from '../../../../assets/Sharing'
import { News } from '../Block21/News'
import classes from './Block12.module.css'

export const Block12 = ({news, big}) => {
    let doubleImageRender = big.map((e,i) => {
        return <div className={classes.block12_img} key={i} > 
            <img src={e.img} />
        < NavLink  className={classes.block12_discription} to={`/${e.title}`}>{e.title} <br /> 
        <span> {e.time} </span></ NavLink >
        <Sharing />
        </div>
    })
    let newsRender = news.map((e,i) => {
        return <News title={e.title} time={e.time} key={`${e.time}${i}`}/>
    } )
    return (
        <>
            <div className={classes.block12_articles}> 
                {newsRender}
            </div>
            <div className={classes.block12_dblimg}>
                {doubleImageRender}
            </div>
        </>
    )
}