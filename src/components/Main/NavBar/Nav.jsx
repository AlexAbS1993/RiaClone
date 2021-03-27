import classes from './Nav.module.css'
import React from 'react'
import { useMemo } from 'react'
import { NavLink } from 'react-router-dom'

export const Nav = ({usage}) => {
    const navs = useMemo(() => {
    if (usage === "first"){ return [
        "Политика", "В мире", "Экономика", "Общество",
        "Происшествия", "Армия", "Наука", "Культура", "Религия",
        "Спорт", "Туризм"
    ]}
    else if (usage === "second"){
        return ["Специальный репортаж", "Авторы", "Фото", "Видео", "Происшествия", "Контакты"]
    }
    }, [usage])
    const navsRender = navs.map((e, i) => <NavLink to={`/${e}`} className={classes.link} key={i}> {e} </NavLink>)
    return (
        <div className={usage === "first" ? classes.wrapper : classes.secondWrapper}>
            {navsRender}
        </div>
    )
}