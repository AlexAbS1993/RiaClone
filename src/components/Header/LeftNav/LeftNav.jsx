import { useMemo } from 'react'
import classes from './LeftNav.module.css'

export const LeftNav = () => {
    const navButtons = useMemo(() => [
        "L", "S", "C"
    ], [])
    const navButtonsRender = navButtons.map( (e,i) => <div className={classes.link} key={i}> {e} </div>)
    return(
        <div className={classes.wrapper}>
            {navButtonsRender}
        </div>
    )
}