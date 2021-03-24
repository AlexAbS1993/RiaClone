import classes from './Button.module.css'

export const Button = ({isOpen, setIsOpen}) => {
    return (
        <div className={classes.wrapper}>
            <button onClick={isOpen ? function(){setIsOpen(false)} : undefined} className={classes.toggle}> {isOpen ? "V" : "^"}</button>
        </div>
    )
}