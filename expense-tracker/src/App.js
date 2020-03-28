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
      expenses: []
      
    };
  }

//  function to handle checkbox
// search this.state.expenses for the item that was checked/unchecked
// update item to reflect  new 'checked" state
// setstate

toggleCheckBox = (e, id) => {
  console.log(e.target.checked);
  // create a copy of expenses
  const expensesCopy = this.state.expenses.map(expense => Object.assign({}, expense));
  // find item in copy of expenses based on id
  // modify the isChecked property
  // save the copy of expenses to state
  this.setState({expenses: expensesCopy});
};


  updateItem = e => {
   
    this.setState({ [e.target.name]: e.target.value });
  };

  // function to update state and send as props to expenseform
  addExpense = () => {
    //  Create a new expense object
    const expense = {
      item: this.state.item,
      amount: this.state.amount,
      type: this.state.type,
      date: this.state.date,
      isChecked: false
    };

    // update expenses in state to relfect the new expense
    // create deep clone of expenses
    // loop through expenses with map method along with a callback function
    // this will return a deep clon object from the array of expenses
    const expenseCopy = this.state.expenses.map(function(expense) {
      // object is a static class and assign is a method
      return Object.assign({}, expense);
    });
    // this will create an array of cloned objects

    // // add new expense to deep clone
    expenseCopy.push(expense);

    // // setState to deep clone of expenses
    this.setState({ expenses: expenseCopy });
  };

  render() {
    return (
      <div>
        <Header />
        <ExpenseForm 
        updateItem={this.updateItem}
         />
        <ExpenseTable
          expenses={this.state.expenses}
          addExpense={this.addExpense}
          toggleCheckBox={this.toggleCheckBox}
          
          
        />
      </div>
    );
  }
}

export default App;
