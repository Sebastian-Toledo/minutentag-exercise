import { useState } from "react";

/**
 * The Rating component consists in a container with 5 stars.
 * Each star is represented by a <span /> element.
 * The component should render to this HTML code:
 *
 *  <div id='rating'>
 *		<span>*</span>
 *		<span>*</span>
 *		<span>*</span>
 *		<span>*</span>
 *		<span>*</span>
 *	</div>
 *
 * When an <span /> element is clicked, the active class should be added to that <span /> and to ALL <span />
 * before it.
 * Also, the active class should be removed from all span elements after it, if there are any.
 * For example, after the third span element has been clicked, the HTML code should look like this:
 *
 * <div id='rating'>
 *  <span class="active">*</span>
 *  <span class="active">*</span>
 *  <span class="active">*</span>
 *  <span>*</span>
 *  <span>*</span>
 * </div>
 */

const STAR_ARRAY = new Array(5).fill("inactive");

export function Rating() {
  const [stars, setStars] = useState(STAR_ARRAY);

  const handleClick = (key) => {

    setStars((prevStars) => [
      ...prevStars.slice(0, key + 1).fill("active"),
      ...prevStars.slice(key + 1, prevStars.length).fill("inactive"),
    ]);
  };

  return (
    <div id="rating">
      {stars.map((star, key) => (
        <span class={star} key={key} onClick={() => handleClick(key)} style={{padding: '1em',fontSize: '1.5em'}}>
          *
        </span>
      ))}
    </div>
  );
}
