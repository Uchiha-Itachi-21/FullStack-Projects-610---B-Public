import React from "react";

function Summary({ expenses }) {
  const total = expenses.reduce(function (sum, exp) {
    return sum + exp.amount;
  }, 0);

  return (
    <div style={{ marginTop: "20px", fontWeight: "bold", textAlign: "center" }}>
      Total Chakra Spent: {total}
    </div>
  );
}

export default Summary;
