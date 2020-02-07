import React from "react";

function Expense() {
  return (
    <form>
      <div>
        <span>Item:</span>
        <input type="text" placeholder="What did you buy today?"></input>
      </div>

      <div>
        <span>Amount:</span>
        <input type="text" placeholder="How much?"></input>
      </div>

      <div>
        <span>Type:</span>
        <select>
          <option value="card">Debit Card</option>
          <option value="credit card">Credit Card</option>
          <option value="cash">Cash</option>
        </select>
      </div>

      <div>
        <span>Date:</span>
        <input type="date"></input>
      </div>

      
      
    </form>
  );
}

export default Expense;
