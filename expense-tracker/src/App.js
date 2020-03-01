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
      type: "",
      date: "",
      expenses: []
     
    };
  }

updateItem = (e) =>{
const newItem = e.target.value;
console.log(newItem);
}

// function to update state and send as props to expenseform
addExpense = () =>{
  
//  Create a new expense object
const expense = {
  item: this.state.item,
  amount: this.state.amount,
  type: this.state.amount,
  date: this.state.date,
}
// update expenses in state to relfect the new expense
// create deep clone of expenses
const expenseCopy = [...this.state.expenses]

// add new expense to deep clone
expenseCopy.push(expense);

// setState to deep clone of expenses
this.setState({expenses: expenseCopy});;


};

  render() {


    return (
      <div>
        <Header />
        <ExpenseForm  addExpense={this.addExpense}  />
        <ExpenseTable addExpense={this.addExpense} />
      </div>
    );
  }
  }

export default App;
