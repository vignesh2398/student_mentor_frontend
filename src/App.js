import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import AddStudentstoMentor from "./pages/AddStudentstoMentor";
import AllStudentsforEachMentor from "./pages/AllStudentsforEachMentor";
import ChangeMentorforStudent from "./pages/ChangeMentorforStudent";
import NewMentor from "./pages/NewMentor";
import NewStudent from "./pages/NewStudent";
import ListAll from "./pages/ListAll";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">HomePage</Link>
            </li>
            <li>
              <Link to="/NewMentor">Create new Mentor</Link>
            </li>
            <li>
              <Link to="/NewStudent">Create new Student </Link>
            </li>
            <li>
              <Link to="/AddStudentstoMentor">Add Students to Mentor</Link>
            </li>
            <li>
              <Link to="/ChangeMentorforStudent">
                Change Mentor for student
              </Link>
            </li>
            <li>
              <Link to="/AllStudentsforEachMentor">
                Get all Students for Particular Mentor
              </Link>
            </li>
          </ul>
        </nav>
        <hr />

        <Routes>
          <Route path="/NewStudent" element={<NewStudent />} />

          <Route path="/NewMentor" element={<NewMentor />} />

          <Route
            path="/ChangeMentorforStudent"
            element={<ChangeMentorforStudent />}
          />
          <Route
            path="/AddStudentstoMentor"
            element={<AddStudentstoMentor />}
          />

          <Route
            path="/AllStudentsforEachMentor"
            element={<AllStudentsforEachMentor />}
          />

          <Route path="/" element={<ListAll />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
