export const debounce = (f, ms) => {
    let now = Date.now()
    return (...args) => {
        if (Date.now() - now > ms){
            now = Date.now()
            return f(...args)
        }
    }
}