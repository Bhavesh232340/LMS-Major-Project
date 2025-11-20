import React, { useState } from "react";
import StudentRegistration from "./StudentRegistration";
import StudentList from "./StudentList";
import StudentProfile from "./StudentProfile";
import DeleteStudent from "./DeleteStudent";
import UpdateStudent from "./UpdateStudent";

function App() {
   const [students, setStudents] = useState([]);
  const [selected, setSelected] = useState(null);

  return (
    <div style={{ margin: "20px" }}>
      <h2>🎓 Student Management App</h2>
      <StudentRegistration students={students} setStudents={setStudents} />
      <StudentList students={students} setSelected={setSelected} />
      {selected && (
        <>
          <StudentProfile student={selected} />
          <UpdateStudent students={students} setStudents={setStudents} student={selected} />
          <DeleteStudent students={students} setStudents={setStudents} student={selected} />
        </>
      )}
    </div>
  );
}

export default App;
