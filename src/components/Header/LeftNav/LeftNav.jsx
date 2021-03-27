import { useMemo, useState } from 'react'
import { Chat } from './Chat/Chat'
import classes from './LeftNav.module.css'
import { SearchWrapper } from './Search/SearchWrapper'

export const LeftNav = () => {
    const navButtons = useMemo(() => [
        "L", "S", "C"
    ], [])
    const [isChatOpen, setIsChatOpen] = useState(false)
    const [searchIsOpen, setSearhIsOpen] = useState(false)
    function clickAction(element){
        switch (element){
            case "C":{
                setIsChatOpen(!isChatOpen)
                break
            }
            case "S":{
                setSearhIsOpen(!searchIsOpen)
                break
            }
            default: return undefined
        }
    }
    const navButtonsRender = navButtons.map( (e,i) => <div className={classes.link} key={i} onClick={clickAction.bind(null, e)}> {e} </div>)
    return(
        <div className={classes.wrapper}>
            {navButtonsRender}
            {isChatOpen && <Chat setIsChatOpen={setIsChatOpen}/>}
            {searchIsOpen && <SearchWrapper setSearhIsOpen={setSearhIsOpen}/>}
        </div>
    )
}