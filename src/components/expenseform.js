import React from "react";


class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form>
        <div className="row">
          <div className="form-group ml-4 auto" style={{ color: "black", fontWeight: "bold" }}>
            <span>Item:</span>
            <input
              className="form-control"
              type="text"
              name="item"
              value={this.props.item}
              onChange={this.props.updateItem}
              placeholder="What did you buy today?"
            ></input>
          </div>

          <div className="form-group ml-4 auto" style={{ color: "black", fontWeight: "bold" }}>
            <span>Amount:</span>
            <input
              className="form-control"
              type="text"
              name="amount"
              value={this.props.amount}
              onChange={this.props.updateItem}
              placeholder="How much did it cost?"
            ></input>
          </div>

          <div className="form-group ml-4 auto" style={{ color: "black", fontWeight: "bold" }}>
            <span>Type:</span>
            <select className="form-control" name="type" onChange={this.props.updateItem}>
              <option value="Debit Card">Debit Card</option>
              <option value="Credit Card">Credit Card</option>
              <option value="Cash">Cash</option>
            </select>
          </div>

          <div className="form-group ml-4 auto" style={{ color: "black", fontWeight: "bold" }}>
            <span>Date:</span>
            <input
              className="form-control"
              type="date"
              name="date"
              value={this.props.date}
              onChange={this.props.updateItem}
            ></input>
          </div>
        </div>
      </form>
    );
  }
}

export default ExpenseForm;
