import React, { useEffect, useState } from "react";
import axios from "axios";

const Students = () => {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");
  const [batchId, setBatchId] = useState("");

  const fetchStudents = () => {
    axios
      .get("http://localhost:8080/students")
      .then((res) => setStudents(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleAddStudent = () => {
    if (!name || !email || !phone || !course || !batchId)
      return alert("Fill all fields");
    axios
      .post("http://localhost:8080/students", {
        name,
        email,
        phone,
        course,
        batchId,
      })
      .then(() => {
        fetchStudents();
        setName("");
        setEmail("");
        setPhone("");
        setCourse("");
        setBatchId("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="card">
      <h2>Students</h2>

      <div className="input-group">
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          placeholder="Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />
        <input
          placeholder="Batch ID"
          value={batchId}
          onChange={(e) => setBatchId(e.target.value)}
        />

        <button className="button" onClick={handleAddStudent}>
          Add Student
        </button>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Course</th>
            <th>Batch ID</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.phone}</td>
              <td>{student.course}</td>
              <td>{student.batchId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Students;
