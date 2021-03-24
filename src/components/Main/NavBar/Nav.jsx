import classes from './Nav.module.css'
import { useMemo } from 'react'
import { NavLink } from 'react-router-dom'

export const Nav = () => {
    const navs = useMemo(() => [
        "Политика", "В мире", "Экономика", "Общество",
        "Происшествия", "Армия", "Наука", "Культура", "Религия",
        "Спорт", "Туризм"
    ], [])
    const navsRender = navs.map((e, i) => <NavLink to={`/${e}`} className={classes.link} key={i}> {e} </NavLink>)
    return (
        <div className={classes.wrapper}>
            {navsRender}
        </div>
    )
}