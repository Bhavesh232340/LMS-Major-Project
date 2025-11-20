import React from "react";

function StudentList({ students, setSelected }) {
  return (
    <div>
      <h3>Student List</h3>
      {students.length === 0 ? (
        <p>No students registered</p>
      ) : (
        <ul>
          {students.map((s, i) => (
            <li key={i}>
              {s.name} (ID: {s.stid}){" "}
              <br></br>
              <button onClick={() => setSelected(s)}>View</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default StudentList;
