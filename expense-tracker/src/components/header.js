import React from "react";

class Header extends React.Component {
  constructor() {
    super();
  }
    render() {
    return (
      <div className="shadow p-3 mb-5 bg-white rounded">
        <h1 className="text-center text-info">Expense Tracker</h1>
      </div>
    );
    }
  }

export default Header;
