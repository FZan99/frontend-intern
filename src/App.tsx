import React from "react";
import AdminLogin from "./components/AdminLogin/AdminLogin";
import Homepage from "./components/Homepage/Homepage";
import AddAdmin from "./components/AddAdmin/AddAdmin";
import LoanHistory from "./components/LoanHistory/LoanHistory";
import Book from "./components/Book/Book";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./ProtectedRoute";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
 
const queryClient = new QueryClient()

function App() {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/adminLogin" element={<AdminLogin />} />
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/addAdmin" element={<AddAdmin />} />
          <Route path="/loanHistory" element={<LoanHistory />} />
          <Route path="/getBook" element={<Book />} />
        </Route>
      </Routes>
      </QueryClientProvider>
    </Router>
  );
}

export default App;
