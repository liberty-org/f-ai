import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Login } from "./pages/login";
import { CourseRecommender } from "./pages/courses";
import { Welcome } from "./pages/welcome";
import { Header } from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/courses" element={<CourseRecommender />} />
        {/* <Route path="/chatbot" element={<Chatbot />} /> */}
      </Routes>
    </Router>
  );
}
export default App;
