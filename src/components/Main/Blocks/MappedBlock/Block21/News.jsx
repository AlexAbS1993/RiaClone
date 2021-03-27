import { Sharing } from '../../../../assets/Sharing'
import classes from './News.module.css'
import {NavLink} from 'react-router-dom'

export const News = ({title, time}) => {
    return (
        <div className={classes.wrapper}>
            <div><NavLink to={`/${title}`}>{title}</NavLink></div>
            <div><small>{time}</small></div>
            <Sharing />
        </div>
    )
}