import React, { useState } from "react";

function UpdateStudent({ students, setStudents, student }) {
  const [standard, setStandard] = useState(student.standard);
  const [roll, setRoll] = useState(student.roll);

  const handleUpdate = () => {
    const updated = students.map((s) =>
      s.stid === student.stid ? { ...s, standard, roll } : s
    );
    setStudents(updated);
  };

  return (
    <div>
      <h3>Update Student</h3>
      <input value={standard} onChange={(e) => setStandard(e.target.value)} placeholder="Standard" />{" "}
      <br></br>    
      <input value={roll} onChange={(e) => setRoll(e.target.value)} placeholder="Roll" />{" "}
      <br></br>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default UpdateStudent;
