import React from "react";

// Create function to add expenses to table

function ListExpenses() {



  return (
    <div>
      <button type="submit" id="add-expense-btn">
        Add Expense
      </button>
    </div>
    
  );
}


const button = document.getElementById('add-expense-btn');


button.addEventListener('click', function(e) {
  console.log("button works"); {
  
}
  
});


export default ListExpenses;
