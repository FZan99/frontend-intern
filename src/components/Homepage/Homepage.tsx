import React from "react";
import { Link } from 'react-router-dom';
import useStore from "../../store/AuthStore";

function Homepage() {

  const {isAuthenticated} = useStore();
  const logout = useStore(state => state.logout);
  
  return (
    <div>
    <h1>This is homepage</h1>
    <p><Link to='/addAdmin'>Add admin</Link></p>
    <p><Link to='/loanHistory'>Loan History</Link></p>
    <p><Link to='/getBook'>Available Book</Link></p>

      {(() => {
        if (isAuthenticated == false) {
          return (
            <Link to='/adminLogin'><button>Log In</button></Link>
          )
        } else {
          return (
            <button onClick={logout}>Log Out</button>
          )
        }
      })()}

  </div>
  );
}

export default Homepage;
