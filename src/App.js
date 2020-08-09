import React from "react";
import Header from "./components/Header";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      item: "",
      amount: "",
      type: "Debit Card",
      date: "",
      expenses: [],
    };
  }

  toggleCheckBox = (e, id) => {
    const expensesCopy = this.state.expenses.map((expense) =>
      Object.assign({}, expense)
    );

    const expense = expensesCopy.find(function (currentValue) {
      return currentValue.id === id;
    });
    const expenseIndex = expensesCopy.indexOf(expense);

    expensesCopy[expenseIndex].isChecked = e.target.checked;

    this.setState({ expenses: expensesCopy });
  };

  updateItem = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  deleteExpense = () => {
    const expensesCopy = this.state.expenses.map((expense) =>
      Object.assign({}, expense)
    );

    const expenseNotToDelete = expensesCopy.filter(function (currentValue) {
      return currentValue.isChecked !== true;
    });
    this.setState({ expenses: expenseNotToDelete });
  };

  addExpense = () => {

    const expense = {
      id: new Date().getTime(),
      item: this.state.item,
      amount: this.state.amount,
      type: this.state.type,
      date: this.state.date,
      isChecked: false,
    };

    const expenseCopy = this.state.expenses.map(function (expense) {
      return Object.assign({}, expense);
    });

    expenseCopy.push(expense);

    this.setState({ expenses: expenseCopy });
  };

  render() {
    return (
      <div className="container">
        <Header />
        <ExpenseForm updateItem={this.updateItem} />
        <ExpenseTable
          expenses={this.state.expenses}
          addExpense={this.addExpense}
          toggleCheckBox={this.toggleCheckBox}
          deleteExpense={this.deleteExpense}
        />
      </div>
    );
  }
}

export default App;
