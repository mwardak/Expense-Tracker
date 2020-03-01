import React from "react";

// Add expenses to table
class ExpenseTable extends React.Component {
  constructor(props) {
    super(props);

    // Create HTML table for expenses to display as a list
  }
  render() {
    return (
      <table>
        <tbody>
          <tr>
            <th>
              <button type="submit" onClick={this.props.addExpense}>
                Add Expense
              </button>
            </th>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default ExpenseTable;
