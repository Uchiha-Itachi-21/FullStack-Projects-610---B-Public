import React from "react";

function List({ expenses, deleteExpense }) {
  if (expenses.length === 0) return <p style={{ textAlign: "center" }}>No expenses yet 🍃</p>;

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {expenses.map(function (exp, index) {
        return (
          <li
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "8px",
              padding: "8px",
            }}
          >
            <div>
              <strong>{exp.title}</strong> - {exp.amount} chakra ({exp.category})
            </div>
            <button
              onClick={() => deleteExpense(index)}
              style={{
                backgroundColor: "#388e3c",
                color: "white",
                border: "none",
                cursor: "pointer",
                padding: "2px 6px",
                borderRadius: "3px",
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default List;
