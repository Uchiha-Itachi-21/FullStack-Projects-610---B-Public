import React from "react";

function Filter({ filter, setFilter }) {
  const categories = ["All", "Shuriken", "Kunai", "Ramen", "Scrolls", "Summoning"];

  return (
    <div style={{ marginBottom: "15px" }}>
      <label>Filter by Ninja Category: </label>
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        style={{ padding: "5px" }}
      >
        {categories.map(function (cat) {
          return (
            <option key={cat} value={cat}>
              {cat}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default Filter;
