import ItemContainer from "./ItemContainer";
import { useState, useEffect } from "react";

function MainPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/items", {
      credentials: 'include'
    })
      .then(res => res.json())
      .then(items => setItems(items))
  }, [])
  
  return (
    <div className="main">
      <ItemContainer items={items}/>
    </div>
  )
}

export default MainPage;