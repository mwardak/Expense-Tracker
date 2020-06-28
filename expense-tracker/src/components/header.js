import React from "react";

class Header extends React.Component {
  constructor() {
    super();
  }
    render() {
    return (
      <div>
        <h1 className="col-3 mx-auto">Expense Tracker</h1>
      </div>
    );
    }
  }

export default Header;
