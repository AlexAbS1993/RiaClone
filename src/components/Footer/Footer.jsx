import React, { useState } from 'react'
import { Button } from './Button/Button'
import classes from './Footer.module.css'
import { News } from './News/News'
import { Title } from './Title/Title'
export const Footer = () => {
    const [isOpen, setIsOpen] = useState(false)
// Функция открытия и закрытия
    let clickHandler = () => {
        setIsOpen(true)
    }

    return (
        <div className={isOpen ? classes.openWrapper : classes.wrapper} onClick={!isOpen ? clickHandler : undefined}>
            <Title />
            <News isOpen={isOpen}/>
            <Button isOpen={isOpen} setIsOpen={setIsOpen}/>
        </div>
    )
}