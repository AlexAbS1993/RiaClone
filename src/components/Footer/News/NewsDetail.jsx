import { NavLink } from 'react-router-dom'
import classes from './NewsDetail.module.css'

export const NewsDetail = ({title, time, isOpen}) => {
return (
    <NavLink className={classes.wrapper}  to={`/news/${title.slice(0,5)}`} onClick={isOpen ? undefined : (e) => {e.preventDefault()}}> 
        <div className={classes.time}>
            {time}
        </div>
        <div className={classes.title}>
            {title}
        </div>
    </NavLink>
)
}