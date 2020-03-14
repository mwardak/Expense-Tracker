import React from "react";
import { Table, Container } from "react-bootstrap";

// Add expenses to table
class ExpenseTable extends React.Component {
  constructor(props) {
    super(props);
    
    // Create a table row for each loop
    return this.props.expenses.map(function(tableRow){
    // loop through each expense
    console.log(tableRow);
    
    const rows = [];
    });

    rows.push(tableRow);

    // Create HTML table for expenses to display as a list
  }
  render() {
    return (
      <Container>
        <Table className="table-striped table bordered">
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
          <tbody>
            {rows}
          </tbody>
        </Table>
      </Container>
    );
  }
}

export default ExpenseTable;
