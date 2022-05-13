import { useState } from "react";
/**
 * You have a Grocery component, which receives a list of products, each one with name and votes.
 * - The app should render an unordered list, with a list item for each product.
 * - Products can be upvoted or downvoted.
 * By appropriately using React state and props, implement the upvote/downvote logic.
 * Keep the state in the topmost component, while the Product component should accept props.
 *
 * For example, passing the following array as products prop to Grocery
 * [{ name: "Oranges", votes: 0 }, { name: "Bananas", votes: 0 }]
 * and clicking the '+' button next to the Oranges should result in HTML like:
 *
 *   <ul>
 *     <li>
 *       <span>Oranges - votes: 1</span>
 *       <button>+</button>
 *       <button>-</button>
 *     </li>
 *     <li>
 *       <span>Bananas - votes: 0</span>
 *       <button>+</button>
 *       <button>-</button>
 *     </li>
 *   </ul>
 */

function Product(props) {
  function handlePlus() {
    props.onChange(props.product.votes + 1);
  }

  function handleMinus() {
    if (props.product.votes > 0) {
      props.onChange(props.product.votes - 1);
    }
  }

  return (
    <li>
      <span>
        {props.product.name} - votes: {props.product.votes}
      </span>
      <button onClick={handlePlus}>+</button>
      <button onClick={handleMinus}>-</button>
    </li>
  );
}

export function Grocery({ products }) {
  const [currentProducts, setCurrentProducts] = useState(products);

  const handleOnChange = (key, votes) => {
    const newProducts = currentProducts.map((product, id) => {
      if (id === key) {
        return {
          ...product,
          votes,
        };
      }

      return product;
    });

    setCurrentProducts(newProducts);
  };
  return (
    <ul>
      {currentProducts.map((product, key) => (
        <Product
          product={product}
          key={key}
          onChange={(newVotes) => {
            console.log(newVotes);
            handleOnChange(key, newVotes);
          }}
        />
      ))}
    </ul>
  );
}
