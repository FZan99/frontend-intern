import React from "react";
import useStore from "../../store/AuthStore";

function LoanHistory() {
  const logout = useStore(state => state.logout)
  return (
    <div>
      <h1>Loan History</h1>
      <p>Secret Page</p>
      <button onClick={logout}>Log Out</button>
    </div>
  );
}

export default LoanHistory;