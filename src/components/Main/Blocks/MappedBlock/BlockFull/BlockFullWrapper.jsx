import React, { useState } from 'react'
import { config } from '../../../../../config/config'
import { BlockFull } from './BlockFull'
import classes from './BlockFull.module.css'

export const BlockFullWrapper = () => {
    const [blight, setBlight] = useState(false)
    // Имитация обращения к севреру
    // const [children, setChildren] = useState([])
    // useEffect(() => {
    // async function getChildren(){
    // let response = await axios.get(`url/children/?size=${config.childrenPosition}`)
    // setChildren(response.data)
    // }
    // getChildren()
    // }, [])
    // const childrenRender = children.map......
    // Конец имитации

    const childrenRender = new Array(config.childrenPositions).fill(undefined).map((e, i) => {
        return <div key={i} className={classes.child}>Этот ребёнок нуждается в помощи, помоги ему</div>
    })
    console.log(childrenRender)
    let title = "Информация о детях, \n оставшихся без попечения родителей. Подари им семью!"
    return (
        <BlockFull childrenRender={childrenRender} title={title} src={config.image.children} setBlight={setBlight} blight={blight}/>
    )
}