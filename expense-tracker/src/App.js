
import React from "react";
import Header from "./components/header";
import Expense from "./components/expense";
import ListExpenses from './components/listexpenses';
import "bootstrap/dist/css/bootstrap.min.css";


// function to add expenses to table
// Create HTML table
// function to handle user input. function below will have access to state



//Change functions below to a Class
// Add set state to the class
class App extends React.Component {
  constructor(){
    
  }
  


 render(){
  
  return (
    <div>
      <Header />
      <Expense  />
      <ListExpenses />
    </div>
  );
}

export default App;
