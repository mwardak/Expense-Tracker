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
            <th>Item</th>
            <th>Amount</th>
            <th>Type</th>
            <th>Date</th>
              <td type="submit" onSubmit={this.props.addExpense.bind(this)}>
              <button type="submit" onClick={this.props.addExpense.bind(this)} >
                Add Expense 
              </button>
              </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default ExpenseTable;
