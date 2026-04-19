import React, { useEffect, useState } from "react";
import axios from "axios";

const Batches = () => {
  const [batches, setBatches] = useState([]);
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");

  const fetchBatches = () => {
    axios.get("http://localhost:8080/batches")
      .then((res) => setBatches(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchBatches();
  }, []);

  const handleAddBatch = () => {
    if (!name || !course) return alert("Fill all fields");
    axios.post("http://localhost:8080/batches", { name, course })
      .then(() => {
        fetchBatches();
        setName("");
        setCourse("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="card">
      <h2>Batches</h2>

      <div className="input-group">
        <input
          type="text"
          placeholder="Batch Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />
        <button className="button" onClick={handleAddBatch}>
          Add Batch
        </button>

      </div>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Course</th>
          </tr>
        </thead>
        <tbody>
          {batches.map((batch) => (
            <tr key={batch.id}>
              <td>{batch.id}</td>
              <td>{batch.name}</td>
              <td>{batch.course}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Batches;
