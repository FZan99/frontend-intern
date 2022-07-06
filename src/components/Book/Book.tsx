import React from "react";
import { Link } from "react-router-dom";
import useStore from "../../store/AuthStore";
import BookPagination from "./BookPagination";
import FilterBook from "./FilterBook";
import SortBook from "./sortBook";

function Book() {
  const { isAuthenticated } = useStore();
  const logout = useStore((state) => state.logout);

  return (
    <div>
      <h1>Available Book</h1>
      {(() => {
        if (isAuthenticated == false) {
          return (
            <Link to="/adminLogin">
              <button>Log In</button>
            </Link>
          );
        } else {
          return <button onClick={logout}>Log Out</button>;
        }
      })()}
      <SortBook />
      <FilterBook />
      <BookPagination />
    </div>
  );
}

export default Book;
