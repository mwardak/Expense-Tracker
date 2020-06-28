import React from "react";
import Header from "./components/header";
import ExpenseForm from "./components/expenseform";
import ExpenseTable from "./components/expensetable";
import "bootstrap/dist/css/bootstrap.min.css";

// Create class for App
class App extends React.Component {
  constructor() {
    super();
    // Create an empty array to push expenses
    this.state = {
      item: "",
      amount: "",
      type: "Debit Card",
      date: "",
      expenses: [],
    };
  }

  // function to handle checkbox
  // search this.state.expenses for the item that was checked/unchecked
  // update item to reflect  new 'checked" state
  // setstate

  toggleCheckBox = (e, id) => {
    // create a copy of expenses by mapping through expenses in state
    const expensesCopy = this.state.expenses.map((expense) =>
      Object.assign({}, expense)
    );
    // find item in copy of expenses based on id
    const expense = expensesCopy.find(function (currentValue) {
      return currentValue.id === id;
    });
    const expenseIndex = expensesCopy.indexOf(expense);
    // modify the isChecked property
    expensesCopy[expenseIndex].isChecked = e.target.checked;
    // save the copy of expenses to state
    this.setState({ expenses: expensesCopy });
  };

  updateItem = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // create button to delete expenses in Expensetable
  // add onchange event to button

  deleteExpense = () => {
    const expensesCopy = this.state.expenses.map((expense) =>
      Object.assign({}, expense)
    );
    // create a new arrary of expenses use the .filter method
    // use the filter function to  filter out expenses that ischecked !== true

    const expenseNotToDelete = expensesCopy.filter(function (currentValue) {
      // where any expense "isChecked" property !== true
      return currentValue.isChecked !== true;

      
    });
    this.setState({expenses: expenseNotToDelete})

   
  };
  // function to update state and send as props to expenseform
  addExpense = () => {
    //  Create a new expense object. this is pulling the data from the expense form. this is needed before the .map function can loop through expenses 
    const expense = {
      id: new Date().getTime(),
      item: this.state.item,
      amount: this.state.amount,
      type: this.state.type,
      date: this.state.date,
      isChecked: false,
    };

    // loop through expenses with map method along with a callback function

    // this will return a deep clone object from the array of expenses
    const expenseCopy = this.state.expenses.map(function (expense) {
      // object is a static class and assign is a method
      return Object.assign({}, expense);
    });
    // this will create an array of cloned objects

    // // add new expense to deep clone
    expenseCopy.push(expense);

    // // setState to deep clone of expenses. update expenses in state to relfect the new expense
    this.setState({ expenses: expenseCopy });
  };

  render() {
    return (
      <div>
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
