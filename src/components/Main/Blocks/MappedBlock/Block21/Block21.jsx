import { Sharing } from "../../../../assets/Sharing"
import { News } from "./News"
import classes from './Block21.module.css'
import {NavLink} from 'react-router-dom'

export const Block21 = ({big, news}) => {
    const newsRender = news.map((e, i) => {
        return <News title={e.title} time={e.time} key={`${e.time}${i}`}/>
    })
    return (
        <>
            <div className={classes.block21_img} > 
            <img src={big.img}/> 
            <NavLink className={classes.block21_description} to={`/${big.title}`}>
            {big.title} <br />
            <span>{big.time}</span>
            </NavLink>
            <Sharing /> 
            </div>
            <div className={classes.block21_articles}> 
            {newsRender}
            </div>                  
        </>
    )
}