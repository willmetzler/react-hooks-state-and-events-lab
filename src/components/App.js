import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";





function App() {
  const [lightsOn, setLightsOn] = useState(false);
  function LightsButton () {
    
    function handleClick() {
      setLightsOn((lightsOn) => !lightsOn);
    }
  
    return <button onClick={handleClick}>{lightsOn ? "Light Mode" : "Dark Mode"}</button>
  }

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = lightsOn ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <LightsButton />
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
