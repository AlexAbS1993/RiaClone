import React from 'react'
import { Sharing } from '../../../../assets/Sharing'
import classes from './BlockFull.module.css'

export const BlockFull = ({childrenRender, title, src, blight, setBlight}) => {
    return (
        <div className={classes.wrapper} onMouseEnter={() => {setBlight(!blight)}} onMouseLeave={() => {setBlight(!blight)}}>
            <img src={src} className={blight && classes.hoveredimg}/>
            <div className={classes.information}>
                <div className={classes.title} > {title} </div>            
                    {childrenRender}
            </div>
            <Sharing />
        </div>
    )
}