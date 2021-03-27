import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router'
import { Search } from './Search'


export const SearchWrapper = ({setSearhIsOpen}) => {
    const [inputValue, setInputValue] = useState("")
    const [submitToggle, setSubmitToggle] = useState(false)
    const [isRedirect, setRedirect] = useState(false)
    const closeModal = (e) => {
        e.stopPropagation()
        setSearhIsOpen(false)
    }
    useEffect(() => {
        if (submitToggle === true){
            function response(){
                let res =  {
                    results: 1,
                    status: 200,
                    value: inputValue
                }
                return res
            }
            let res = response()
            setSubmitToggle(false)
            console.log(res)
        }   
    }, [submitToggle])
    if (isRedirect){
        return <Redirect to="/search" />
    }
    console.log(inputValue)
        return (
            <Search 
            closeModal={closeModal}
            inputValue={inputValue}
            setInputValue={setInputValue}
            setSubmitToggle={setSubmitToggle}/>
        )
}