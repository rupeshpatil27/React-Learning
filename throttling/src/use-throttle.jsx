import React, { useEffect, useRef, useState } from 'react'

const useThrottle = (value, delay) => {

    const [trottledValue, setTrottledValue] = useState(value)

    const lastExecuted = useRef(Date.now())

    useEffect(() => {
        const handler = setTimeout(() => {
            const now = Date.now();
            const timeElapsed = now - lastExecuted.current

            if (timeElapsed >= delay) {
                setTrottledValue(value)
                lastExecuted.current = now
            }
        }, delay - (Date.now() - lastExecuted.current))

        return ()=>{
            clearInterval(handler)
        }
    }, [delay,value])

    return trottledValue
}

export default useThrottle