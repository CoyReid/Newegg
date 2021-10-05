import ItemContainer from "./ItemContainer";
import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";

function MainPage() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("all");

  useEffect(() => {
    fetch("/items", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((items) => setItems(items));
  }, []);

  const filteredSortedItems = items
    .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
    .filter((item) => {
      if (filter === "all" || item.category.toLowerCase() === filter) {
        return true;
      } else {
        return false;
      }
    })
    .sort((a, b) => {
      if (sort !== "all") {
        return b[sort] - a[sort];
      }
      return true;
    });

  return (
    <div className="main">
      <SearchBar search={search} onSearchChange={setSearch} filter={filter} onFilterChange={setFilter} sort={sort} onSortChange={setSort}/>
      <ItemContainer items={filteredSortedItems} />
    </div>
  );
}

export default MainPage;
