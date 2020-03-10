import React from "react";
import { Table, Container } from "react-bootstrap";

// Add expenses to table
class ExpenseTable extends React.Component {
  constructor(props) {
    super(props);

    // Create HTML table for expenses to display as a list
  }
  render() {
    return (
      <Container>
        <table className="table-striped table bordered">
          <thead className="thead-light">
            <tr>
              <th>Item</th>
              <th>Amount</th>
              <th>Type</th>
              <th>Date</th>
              <td>
                <button type="submit" onClick={this.props.addExpense}>
                  Add Expense
                </button>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr expenses={this.props.expenses}></tr>
            <tr data={this.props.expenses} ></tr>
            <tr></tr>
            <tr></tr>
          </tbody>
        </table>
      </Container>
    );
  }
}

export default ExpenseTable;
