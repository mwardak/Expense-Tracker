import React from "react";


//Form layout for expenses
class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    return (
      <form>
        <div style={{ color: "black", fontWeight: "bold" }} >
          <span>Item:</span>
          <input
            type="text"
            name="item"
            value={this.props.item}
            onChange={this.props.updateItem}
            placeholder="What did you buy today?"
          ></input>
        </div>

        <div style={{ color: "black", fontWeight: "bold" }}>
          <span>Amount:</span>
          <input
            type="text"
            name="amount"
            value={this.props.amount}
            onChange={this.props.updateItem}
            placeholder="How much did it cost?"
          ></input>
        </div>

        <div style={{ color: "black", fontWeight: "bold" }}>
          <span>Type:</span>
          <select name ="type" onChange={this.props.updateItem}>
            <option value="Debit Card" >Debit Card</option>
            <option value="Credit Card">Credit Card</option>
            <option value="Cash">Cash</option>
          </select>
        </div>

        <div style={{ color: "black", fontWeight: "bold" }} >
          <span>Date:</span>
          <input type="date" name="date" value={this.props.date} onChange={this.props.updateItem}></input>
        </div>
      </form>
    );
  }
}

export default ExpenseForm;
