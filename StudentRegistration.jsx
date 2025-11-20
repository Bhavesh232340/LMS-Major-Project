import React, { useState } from "react";

function StudentRegistration({ students, setStudents }) {
  const [data, setData] = useState({ stid: "", name: "", standard: "", age: "", roll: "" });

  const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.stid && data.name) {
      setStudents([...students, data]);
      setData({ stid: "", name: "", standard: "", age: "", roll: "" });
    }
  };

  return (
    <div>
      <h3>Register Student</h3>
      <form onSubmit={handleSubmit}>
        <input name="stid" placeholder="ID" value={data.stid} onChange={handleChange} required />{" "}
        <br></br>
        <input name="name" placeholder="Name" value={data.name} onChange={handleChange} required />{" "}
        <br></br>
        <input name="standard" placeholder="Standard" value={data.standard} onChange={handleChange} />{" "}
        <br></br>
        <input name="age" placeholder="Age" value={data.age} onChange={handleChange} />{" "}
        <br></br>
        <input name="roll" placeholder="Roll" value={data.roll} onChange={handleChange} />{" "}
        <br></br>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default StudentRegistration;
