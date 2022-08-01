import React, { useState, useEffect } from "react";
import ListMentor from "../config/ListMentor";
import ListData from "../config/ListAll";
const AllStudentsforEachMentor = () => {
  const [mentorDetails, setmentorDetails] = useState();
  const [state, setState] = useState();
  const [mentorName, setMentorName] = useState();

  useEffect(() => {
    ListData().then((result) => {
      setMentorName(result.mentor);
    });
    return () => {
      setMentorName("");
    };
  }, []);

  const submitForm = () => {
    ListMentor(state).then((result) => {
      setmentorDetails(result);
    });
  };
  if (!mentorName) {
    return <p>Loading.....</p>;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div>
            <label>Select Mentor</label>
            <select onChange={(ev) => setState(ev.target.value)}>
              <option>Select Mentor</option>
              {mentorName &&
                mentorName.map((ment) => {
                  return (
                    <option value={ment._id} key={ment._id}>
                      {ment.name}
                    </option>
                  );
                })}
            </select>
          </div>
          <div>
            <button type="button" onClick={() => submitForm()}>
              Submit
            </button>
          </div>
        </div>

        <div className="col">
          {mentorDetails ? (
            <ul>
              {mentorDetails.studentsAssigned.map((stud) => (
                <li key={stud._id}>{stud.name}</li>
              ))}
            </ul>
          ) : (
            ""
          )}
          {mentorDetails
            ? mentorDetails.studentsAssigned.length < 1
              ? "No Students Assigned"
              : ""
            : ""}
        </div>
      </div>
    </div>
  );
};

export default AllStudentsforEachMentor;
