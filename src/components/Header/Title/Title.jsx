import classes from './Title.module.css'
import {NavLink} from 'react-router-dom'

export const Title = () => {
    return (
        <NavLink className={classes.wrapper} to="/">
            <div className={classes.fake}></div>
            <h1 className={classes.title}> РИА НОВОСТИ </h1>
        </NavLink>
    )
}