import { Message } from "./components/Message";
import { FocusableInput } from "./components/FocusableInput";
import { ImageGallery } from "./components/ImageGallery";
import { PlayerStatus } from "./components/PlayerStatus";
import { TeamsList } from "./components/TeamsList";
import { ListItemsForNavigation } from "./components/ListItemsForNavigation";
import "./App.css";
import { Grocery } from "./components/Grocery";
import { Rating } from "./components/Rating";

const PRODUCTS = [
  { name: "Oranges", votes: 0 },
  { name: "Bananas", votes: 0 },
];

const LINKS = [
  "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
  "https://media.istockphoto.com/photos/argentina-buenos-aires-skyline-puerto-madero-at-night-picture-id940492176?k=20&m=940492176&s=612x612&w=0&h=CqlKHoGvHkNyPmoRd4Qy_oON9F6xxLWgnhYvzKR6OjQ=",
];


const ITEM_LIST = Array(10).fill({
  name: "juan",
  status: false
});

export default function App() {
  return (
    <div className="App">
      {/* Render here each component from the "components" directory */}
      <h3>'Message' test</h3>
      <Message />
      <br />
      <h3>'FocusableInput' test</h3>
      <FocusableInput />
      <br />
      <h3>'ImageGallery' test</h3>
      <ImageGallery links={LINKS} />
      <br />
      <h3>'PlayerStatus' test</h3>
      <PlayerStatus />
      <br />
      <h3>'TeamsList' test</h3>
      <TeamsList />
      <br />
      <h3>'Grocery' test</h3>
      <Grocery products={PRODUCTS} />
      <br />
      <h3>'Rating' test</h3>
      <Rating />
      <br />
      <h3>'ListItemsForNavigation' test</h3>
      <ListItemsForNavigation itemList={ITEM_LIST} />
    </div>
  );
}
