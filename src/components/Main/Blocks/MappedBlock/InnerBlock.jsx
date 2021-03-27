import { Block12 } from './Block12/Block12'
import { Block21 } from './Block21/Block21'
import { Block30Wrapper } from './Block30/Block30Wrapper'
import { BlockFullWrapper } from './BlockFull/BlockFullWrapper'
import classes from './InnerBlock.module.css'

export const InnerBlock = ({compose, news}) => {
    const classNames = () => {
        switch(compose){
            case "block21":{
                return  <Block21 news={news.news} big={news.big[0]}/>          
            }
            case "block12": {
                return <Block12 news={news.news} big={news.big}/>
            }
            case "block30": {
                return <Block30Wrapper news={news.news}/>
            }
            case "blockfull":{
                return <BlockFullWrapper />
            }
            default: return <></>
        }
    }
    return (
        <div className={classes[compose]}> 
           {classNames()}
        </div>
    )
}