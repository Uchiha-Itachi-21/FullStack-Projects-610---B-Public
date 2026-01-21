import React, { useState } from "react";

function Form({ addExpense }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  function handleAdd(e) {
    e.preventDefault();
    if (!title || !amount || !category) return;

    const newExpense = {
      title: title,
      amount: parseFloat(amount),
      category: category,
    };

    addExpense(newExpense);

    setTitle("");
    setAmount("");
    setCategory("");
  }

  return (
    <form onSubmit={handleAdd} style={{ marginBottom: "20px" }}>
      <input
        placeholder="Expense Name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ marginRight: "5px", padding: "5px" }}
      />
      <input
        type="number"
        placeholder="Chakra Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={{ marginRight: "5px", padding: "5px" }}
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={{ marginRight: "5px", padding: "5px" }}
      >
        <option value="">Choose Ninja Category</option>
        <option value="Shuriken">Shuriken</option>
        <option value="Kunai">Kunai</option>
        <option value="Ramen">Ramen</option>
        <option value="Scrolls">Scrolls</option>
        <option value="Summoning">Summoning</option>
      </select>
      <button type="submit" style={{ padding: "5px 10px", backgroundColor: "#81c784", border: "none", cursor: "pointer" }}>
        Add
      </button>
    </form>
  );
}

export default Form;
