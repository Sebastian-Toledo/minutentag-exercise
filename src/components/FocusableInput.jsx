/**
 * The TextInput component renders an input element in the DOM
 * and accepts a ref that is forwarded to that input element.
 * Finish the FocusableInput component:
 * - The component should accept a focused prop.
 * - When the focused prop is changed from false to true, and the input is not focused, it should receive the focus.
 * - If on mounting the focused prop is true, the input should receive the focus.
 */
// a que se referie con receive the focus, se refiere a pasar una prop o a hacer current.focus() ?
import React, { useEffect, createRef, useState } from "react";

function Input(props) {
	const { forwardedRef, ...otherProps } = props;
	return <input {...otherProps} ref={forwardedRef} />;
}

const TextInput = React.forwardRef((props, ref) => {
	return <Input {...props} forwardedRef={ref} />;
});

// Implement:
// When the focused prop is changed from false to true,
// and the input is not focused, it should receive focus.
// If focused prop is true, the input should receive the focus.
export function FocusableInput({ focusable = false }) {
	const inputRef = createRef();
	const [isFocus, setIsFocus] = useState(false);
	
	useEffect(() => focusable && !isFocus  && inputRef.current.focus(), [focusable]);
	
	function handleFocus() {
		setIsFocus(true);
	}

	function handleBlur(){
		setIsFocus(false);
	}

	return <TextInput className="notFocus" ref={inputRef} onFocus={handleFocus} onBlur={handleBlur}/>;
}
