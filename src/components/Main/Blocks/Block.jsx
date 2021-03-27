import React from 'react'
import classes from './Block.module.css'
import { InnerBlock } from './MappedBlock/InnerBlock'
import {links} from '../../../links/imglinks'
import { Nav } from '../NavBar/Nav'
import {config} from '../../../config/config'

let newsCollection = [
    {big: [{title: "Россия собирается скупать шерсть ежей у Молдавии", time:"10:00", img: links.block21}], news: [{title: "Зеленая жижа вылилась на улицу Венеции", time: "15:15"},
    {title: "Парламент Северной Кореи был распущен. Ходят слухи, что он не существовал вообще", time: "22:14"},{title: "Кто оплатит счета ЖКХ за электричество на Камчатке? Репортаж", time: "08:26"},
    {title: "Зеленая жижа вылилась на улицу Венеции", time: "15:15"},
    {title: "Парламент Северной Кореи был распущен. Ходят слухи, что он не существовал вообще", time: "22:14"},{title: "Кто оплатит счета ЖКХ за электричество на Камчатке? Репортаж", time: "08:26"}]},
    {big: [{title: "В Мексике запретят продавать на рынках голубей и красную икру", time:"15:05", img: links.block12[0]}, 
    {title: "Мяч и нога встретились спустя десять лет разлуки. Интервью у судьи, запечатлившего момент", time:"10:00", img: links.block12[1]}], news: [{title: "Зеленая жижа вылилась на улицу Венеции", time: "15:15"},
    {title: "Парламент Северной Кореи был распущен. Ходят слухи, что он не существовал вообще", time: "22:14"},{title: "Кто оплатит счета ЖКХ за электричество на Камчатке? Репортаж", time: "08:26"}, {title: "Зеленая жижа вылилась на улицу Венеции", time: "15:15"},
    {title: "Парламент Северной Кореи был распущен. Ходят слухи, что он не существовал вообще", time: "22:14"},{title: "Кто оплатит счета ЖКХ за электричество на Камчатке? Репортаж", time: "08:26"}]},
]

let newsCollectionAfter = [
    {news:[{title: "Это всего лишь тестовая новость", time:"22:19"},{title: "Это всего лишь тестовая новость", time:"22:19"} ]}, {news:[{title: "Это всего лишь тестовая новость", time:"22:19"},{title: "Это всего лишь тестовая новость", time:"22:19"} ]}
]

export const Block = () => {
    const blocksRender = new Array(config.countOfBlocks.beforeNav).fill(undefined).map((e,i) => {
        return <InnerBlock compose={config.blockClassNames[i]} key={i} news={newsCollection[i]}/>
    })
    const blockNewsRender = new Array(config.countOfBlocks.afterNav).fill(undefined).map((e, i) => {
        return <InnerBlock compose={config.blockClassNames[i+2]} key={i+2} news={newsCollectionAfter[i]}/>
    }
    )
    return (
        <div className={classes.wrapper}>
            {blocksRender}
            <Nav usage="second"/>
            {blockNewsRender}
        </div>
    )
}