import classes from './Room.module.css'

export const Room = ({title, users}) => {
    return (
        <div className={classes.wrapper}>
            <p>{title}</p>
            <div className={classes.img}><img src={"https://cdn21.img.ria.ru/images/07e5/02/13/1598163371_0:182:1866:2048_60x60_95_0_0_6b7bd05576f3594f52a78c1410ca98c7.jpg"}/></div>
            <div><small>{users}</small> <div className={classes.status}></div></div>
            <div className={classes.statistics}><div className={classes.statusBlue}></div> Сообщений: 140</div>
        </div>
    )
}