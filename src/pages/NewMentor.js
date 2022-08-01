import React, { useState } from "react";
import createData from "../config/createData";

const NewMentor = () => {
  const [state, setState] = useState({ name: "", email: "", expertise: "" });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const submitForm = async () => {
    setLoading((prev) => !prev);
    const r = await createData("mentor", state);
    setResult(r);
    setLoading((prev) => !prev);
  };

  if (loading) {
    return <p>Loading.......</p>;
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2>Add a new mentor</h2>
          <form>
            <div>
              <label>Name</label>
              <input
                type="text"
                value={state.name}
                onChange={(ev) => {
                  setState((prev) => ({ ...prev, name: ev.target.value }));
                }}
              />
            </div>
            <div>
              <label>Email</label>
              <input
                type="email"
                value={state.email}
                onChange={(ev) => {
                  setState((prev) => ({ ...prev, email: ev.target.value }));
                }}
              />
            </div>
            <div>
              <label>Expertise</label>
              <select
                onChange={(ev) => {
                  setState((prev) => ({ ...prev, expertise: ev.target.value }));
                }}
                value={state.expertise}
              >
                <option value="">Select any value</option>
                <option value="react">react</option>
                <option value="nodejs">nodejs</option>
                <option value="frontend">frontend</option>
                <option value="backend">backend</option>
                <option value="gameDev">gameDev</option>
                <option value="MERN stack	">MERN stack</option>
                <option value="dataScience">dataScience</option>
              </select>
            </div>
            <div>
              <button type="button" onClick={() => submitForm()}>
                Submit
              </button>
            </div>
          </form>
        </div>
        {result && (
          <div
            id="liveToast"
            className={result.status === 200 ? "toast show" : "toast"}
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            <div className="toast-header">
              <strong className="me-auto">Status</strong>
            </div>
            <div className="toast-body">Mentor Added</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewMentor;
