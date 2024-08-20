import { Provider } from "react-redux";
import "./App.css";
import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCream from "./components/IceCream";
import ItemContainer from "./components/ItemContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <CakeContainer />
      {/* comming from state */}
      <HooksCakeContainer />
      {/* ice cream */}
      <br />
      <br />
      <br />
      <br />
      <br />
      <p>Icecream is here</p>
      <IceCream />
      <br />
      <br />
      <br />
      <br />
      <br />
      <p>Buy Multiple iceCream</p>
      <NewCakeContainer />
      <br />
      <br />
      <br />
      <br />
      <br />
      <ItemContainer cake />
      <ItemContainer  />
    </Provider>
  );
}

export default App;
