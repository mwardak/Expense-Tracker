import React from "react";
import { Table, Container } from "react-bootstrap";

class ExpenseTable extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const rows = this.props.expenses.map((expense) => {
      return (
        <tr>
          <td>
            <input
              type="checkbox"
              name="isChecked"
              checked={expense.isChecked}
              onChange={(e) => {
                this.props.toggleCheckBox(e, expense.id);
              }}
            />
          </td>

          <td>{expense.item}</td>
          <td>{expense.amount}</td>
          <td>{expense.type}</td>
          <td>{expense.date}</td>
        </tr>
      );
    });

    return (
      <Container>
        <Table className="table-striped table-bordered">
          <thead className="thead-dark">
            <button
              className=" btn btn-primary"
              type="button"
              onClick={this.props.addExpense}
            >
              Add Expense
            </button>

            <tr>
              <th></th>
              <th>Item</th>
              <th>Amount</th>
              <th>Type</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
        <button
          className=" btn btn-primary"
          type="button"
          onClick={this.props.deleteExpense}
        >
          Delete Expense
        </button>
      </Container>
    );
  }
}

export default ExpenseTable;
