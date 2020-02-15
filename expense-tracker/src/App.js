
import React from 'react';
import Header from "./components/header";
import Expense from "./components/expense";
import ListExpenses from './components/listexpenses';
import 'bootstrap/dist/css/bootstrap.min.css';


// function to add expenses to table
// Create HTML table
function App() {

// function to handle user input
  function handleSubmit(e){
    console.log("this works");
    

  }

  return (
    <div>
      <Header />
      <Expense handleSubmit={handleSubmit} />
      <ListExpenses />
    </div>
  );
}

export default App;
