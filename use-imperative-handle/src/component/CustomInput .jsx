import React, { forwardRef, useImperativeHandle, useRef } from 'react';

const CustomInput = (props, ref) => {
    const inputRef = useRef();

    useImperativeHandle(ref, () => ({
        reset: () => {
            inputRef.current.value = "";
            inputRef.current.focus();
        }
    }));

    return <input ref={inputRef} type="text" placeholder="Type here..." className="border p-2 rounded w-full" />;
};

export default forwardRef(CustomInput);
