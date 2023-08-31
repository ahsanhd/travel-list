import { useState } from "react";
import Item from "./Item";

export default function PakagingList({
  items,
  onDeleteItem,
  onToggle,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedArr;
  if (sortBy === "input") sortedArr = items;
  if (sortBy === "description")
    sortedArr = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedArr = items.slice().sort((a, b) => +a.packed - b.packed);
  return (
    <div className="list">
      <ul>
        {sortedArr.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggle={onToggle}
          />
        ))}
      </ul>
      <div>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort According to input</option>
          <option value="description">Sort According to description</option>
          <option value="packed">Sort According to packed status</option>
        </select>
        <button className="close" onClick={onClearList}>
          Clear List
        </button>
      </div>
    </div>
  );
}
