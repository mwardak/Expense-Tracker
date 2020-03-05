import React from "react";


//Form layout for expenses
class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
  }
    render() {
  return (
    <form>
      <div>
        <span>Item:</span>
        <input type="text" name="item" onChange={this.props.updateItem} placeholder="What did you buy today?"></input>
        <h1> </h1>
      </div>

      <div>
        <span>Amount:</span>
        <input type="text" name= "amount" onChange={this.props.updateItem} placeholder="How much did it cost?"></input>
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
}

export default ExpenseForm;
