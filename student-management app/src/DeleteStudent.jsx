import React from "react";

function DeleteStudent({ students, setStudents, student }) {
  const handleDelete = () => {
    setStudents(students.filter((s) => s.stid !== student.stid));
  };
  return (
    <button onClick={handleDelete} style={{ background: "red", color: "white" }}>
      Delete Student
    </button>
  );
}

export default DeleteStudent;
