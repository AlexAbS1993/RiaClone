import React from 'react'
import { Block30 } from './Block30'
import {Block30News} from './News/Block30News'

export const Block30Wrapper = ({news}) => {
    const newsRender = Array.from({length: 6}).fill(undefined).map((e,i) => {
        return <Block30News news={news}/>
    })
    return (
        <Block30 news={newsRender}/>
    )
}