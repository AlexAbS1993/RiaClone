import classes from './Block30.module.css'

export const Block30 = ({news}) => {
    return (
        <div className={classes.wrapper}>
            {news}
        </div>
    )
}