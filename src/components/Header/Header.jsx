import React from 'react'
import classes from './Header.module.css'
import { LeftNav } from './LeftNav/LeftNav'
import { Title } from './Title/Title'

export const Header = () => {
    return (
        <div className={classes.wrapper}>
            <Title />
            <LeftNav />
        </div>
    )
}