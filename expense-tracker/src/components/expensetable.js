import React from "react";
import { Table, Container } from "react-bootstrap";


// Add expenses to table
class ExpenseTable extends React.Component {
  constructor(props) {
    super(props);

    // Create HTML table for expenses to display as a list
  }
  render() {
    // Create a table row for each loop

    const rows = this.props.expenses.map(expense => {
      return (
       
          <tr>
            <td>
              <input
                type="checkbox"
                name="isChecked"
                checked={expense.isChecked}
                onChange={(e) => {
                  console.log('helo world!');
                  this.props.toggleCheckBox(e, expense.id);
                }}
              />
            </td>

            <td>{expense.item}</td>
            <td >{expense.amount}</td>
            <td>{expense.type}</td>
            <td>{expense.date}</td>
          </tr>
      
      );
    });

    return (
      <Container>
        <Table className="table-striped table-bordered">
          <thead className="thead-light">
            <tr>
              <th>Item</th>
              <th>Amount</th>
              <th>Type</th>
              <th>Date</th>
              <td>
                <button
                  className=" btn btn-primary"
                  type="button"
                  onClick={this.props.addExpense}
                >
                  Add Expense
                </button>
              </td>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </Container>
    );
  }
}

export default ExpenseTable;
