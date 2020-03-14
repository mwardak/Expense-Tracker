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
          <input
            type="text"
            name="item"
            value={this.props.item}
            onChange={this.props.updateItem}
            placeholder="What did you buy today?"
          ></input>
          <h1> </h1>
        </div>

        <div>
          <span>Amount:</span>
          <input
            type="text"
            name="amount"
            value={this.props.amount}
            onChange={this.props.updateItem}
            placeholder="How much did it cost?"
          ></input>
        </div>

        <div>
          <span>Type:</span>
          <select>
            <option value={this.props.type} onChangeCapture={this.props.updateItem} >Debit Card</option>
            <option value={this.props.type}>Credit Card</option>
            <option value={this.props.type}>Cash</option>
          </select>
        </div>

        <div>
          <span>Date:</span>
          <input type="date" value={this.props.date}></input>
        </div>
      </form>
    );
  }
}

export default ExpenseForm;
