/**
 * Given a list of items implement a navigation through the keyboard, following these requirements:
 * - Navigate through the list with UP and RIGHT keys will focus the next item.
 * - Navigate through the list with DOWN and LEFT keys will focus the previous item.
 * - Only one item will be FOCUSED per time in the browser.
 *
 * Suggestion: you may to think in term of "indexes".
 * You may calculate the index and use it to select the item, then you will focus that item.
 *
 * NOTE: The keydown event will work once the <ul> receives the focus.
 */

import { useEffect, useRef, useState } from "react";

export function ListItemsForNavigation(props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const activeItemRef = useRef();

  useEffect(
    function () {
      activeItemRef.current.focus();
    },
    [selectedIndex]
  );

  function handleKeyDown(event) {
    // Add the proper logic to calculate the index that correspond to the item that should be focused.
    if (
      selectedIndex < props.itemList.length - 1 &&
      (event.key === "ArrowDown" || event.key === "ArrowLeft")
    ) {
      setSelectedIndex((prevIndex) => prevIndex + 1);
    }
    if (
      selectedIndex > 0 &&
      (event.key === "ArrowUp" || event.key === "ArrowRight")
    ) {
      setSelectedIndex((prevIndex) => prevIndex - 1);
    }
  }

  return (
    <ul onKeyDown={handleKeyDown} tabIndex={0}>
      {props.itemList.map((item, index) => (
        <li key={index}>
          <input
            ref={index === selectedIndex ? activeItemRef : null}
            value={item.name}
          />
        </li>
      ))}
      {/** Render itemsList as you wish, probably you want to render <li></li> with the proper attributes */}
      {/** If you have issues focusing an element, it is probably because the element is not focusable originally.
       * Try with tabIndex={0} */}
      {/** Do not forget to pass the reference to the selected item */}
    </ul>
  );
}
