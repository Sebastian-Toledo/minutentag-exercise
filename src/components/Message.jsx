import React, { useState } from "react";
/*
 * The Message component contains an anchor element and
 * a paragraph below the anchor. Rendering of the paragraph
 * should be toggled by clicking on the anchor element
 * using the following logic:
 *
 * - At the start, the paragraph should not be rendered.
 * - After a click, the paragraph should be rendered.
 * - After another click, the paragraph should not be rendered.
 * - Finish the Message component by implementing this logic.
 */
export function Message() {
  const [onShowView, setShowView] = useState(false);

  function onChange() {
    setShowView((prevState) => !prevState);
  }

  return (
    <>
      <a onClick={onChange} href="#">
        Want to buy a new car?
      </a>
      {onShowView && <p>Call +11 22 33 44 now!</p>}
    </>
  );
}
