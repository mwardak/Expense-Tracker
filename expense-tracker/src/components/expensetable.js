import React from "react";

// Add expenses to table
class ExpenseTable extends React.Component {
  constructor(props) {
    super(props);

    // Create HTML table for expenses to display as a list
    return (
      <table>
        <div>
          <button type="submit" onClick={this.props.addExpense}>
            Add Expense
          </button>
        </div>
      </table>
    );
  }
}

export default ExpenseTable;
