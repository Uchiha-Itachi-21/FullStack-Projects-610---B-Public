import React, { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import Filter from "./components/Filter";
import Summary from "./components/Summary";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [filter, setFilter] = useState("All");

  function addExpense(expense) {
    setExpenses(expenses.concat(expense));
  }

  function deleteExpense(index) {
    const newExpenses = expenses.filter(function (exp, i) {
      return i !== index;
    });
    setExpenses(newExpenses);
  }

  function resetExpenses() {
    setExpenses([]);
    setFilter("All");
  }

  let displayedExpenses = expenses;
  if (filter !== "All") {
    displayedExpenses = expenses.filter(function (exp) {
      return exp.category === filter;
    });
  }

  return (
    <div>
      <h1 style={{ color: "#2e7d32", textAlign: "center" }}>Konoha Expense Tracker</h1>
      <Form addExpense={addExpense} />
      <Filter filter={filter} setFilter={setFilter} />
      <List expenses={displayedExpenses} deleteExpense={deleteExpense} />
      <Summary expenses={displayedExpenses} />
      <button
        onClick={resetExpenses}
        
      >
        Reset All
      </button>
    </div>
  );
}

export default App;
