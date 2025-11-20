import React from "react";

function StudentProfile({ student }) {
  return (
    <div>
      <h3>Student Profile</h3>
      <p><b>ID:</b> {student.stid}</p>
      <p><b>Name:</b> {student.name}</p>
      <p><b>Standard:</b> {student.standard}</p>
      <p><b>Age:</b> {student.age}</p>
      <p><b>Roll:</b> {student.roll}</p>
    </div>
  );
}

export default StudentProfile;
