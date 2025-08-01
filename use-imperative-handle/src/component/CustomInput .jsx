import React, { forwardRef, useImperativeHandle, useRef } from 'react';

const CustomInput = (props, ref) => {
    const inputRef = useRef();

    useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef.current.focus();
        },
        reset: () => {
            inputRef.current.value = "";
        }
    }));

    return <input ref={inputRef} type="text" placeholder="Type here..." />;
};

export default forwardRef(CustomInput);
