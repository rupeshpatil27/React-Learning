import React, { forwardRef } from 'react'

const userInput = (props , ref) => {
    return (
        <input ref={ref} {...props} />
    )
}

export default forwardRef(userInput)