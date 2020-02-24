import React from "react";
import Header from "./components/header";
import ExpenseForm from "./components/expenseform";
import ExpenseTable from "./components/expensetable";
import "bootstrap/dist/css/bootstrap.min.css";





// Create class for App
class App extends React.Component {
  constructor() {
    super();
    // Create an empty array for expenses
    this.state = {
      expenses: [{
       item: "",
      amount: "", 
      type: "",
      date: ""
     }]
    };
  }

// function to add expenses to table
  addExpense = () =>{

  }

// function to handle user input. function below will have access to state
  userInput = () =>{

  }
  

  render() {
    return (
      <div>
        <Header />
        <ExpenseForm addExpense={this.addExpense}/>
        <ExpenseTable />
      </div>
    );
  }
}
export default App;
