import React from "react";
import Header from "./components/header";
import Expense from "./components/expense";
import ListExpenses from "./components/listexpenses";
import "bootstrap/dist/css/bootstrap.min.css";

// function to add expenses to table
// Create HTML table
// function to handle user input. function below will have access to state
//Change functions below to a Class
// Add state to the class
class App extends React.Component {
  constructor(props) {
    super(props);
// Create an empty array for expenses
    this.state = {
      expenses: [
      {item:"",amount:"",type:"",date:""}
      ]
    };

  }
// Function to add expenses
var addExpense = () =>{

}

  render() {
    return (
      <div>
        <Header />
        <Expense />
        <ListExpenses />
      </div>
    );
  }
}
export default App;
