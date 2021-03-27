import React from 'react'
import classes from './Sharing.module.css'


export const Sharing = () => {
    return (
        <div className={classes.wrapper}>
            <a href="http://facebook.com">F</a>
            <a href="http://vk.com">VK</a>
            <a href="http://twitter.com">Tw</a>
            <a href="#">...</a>
        </div>
    )
}