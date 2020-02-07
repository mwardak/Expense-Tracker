
import React from 'react';
import Header from "./components/header";
import Expense from "./components/expense";
import ListExpenses from './components/listexpenses';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <Header />
      <Expense />
      <ListExpenses />
    </div>
  );
}

export default App;
