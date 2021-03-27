import React from 'react'
import { Block } from './Blocks/Block'
import classes from './Main.module.css'
import { Nav } from './NavBar/Nav'

export const Main = () => {
    return (
        <div className={classes.wrapper}>
           <Nav usage="first"/>
           <Block />
        </div>
    )
}