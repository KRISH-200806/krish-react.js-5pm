import React, { useState } from "react";

function StudentForm() {
  const [data, setdata] = useState({
    name: "",
    email: "",
    password: "",
    select: "",
    radio: false, // Change to string type
  });

  const handlechange = (e) => {
    const { value, type } = e.target;
    const newValue = type === "radio" ? value : value; // Corrected this line
    setdata({ ...data, [e.target.name]: newValue });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handlesubmit} className="form">
        <label htmlFor="name">Name</label>
        <br />
        <input
          type="text"
          name="name"
          value={data.name}
          placeholder="Enter Your Name"
          onChange={(e) => handlechange(e)}
        />
        <br />
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="email"
          name="email"
          value={data.email}
          placeholder="Enter Your Email"
          onChange={(e) => handlechange(e)}
        />
        <br />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input
          type="password"
          name="password"
          value={data.password}
          placeholder="Enter Your Password"
          onChange={(e) => handlechange(e)}
        />
        <br />
        <br />
        <label htmlFor="select">City</label>
        <br />
        <select
          name="select"
          className="select"
          value={data.select}
          onChange={(e) => handlechange(e)}
        >
          <option value="">Select Your City</option>
          <option value="Amareli">Amareli</option>
          <option value="Rajkot">Rajkot</option>
          <option value="Surat">Surat</option>
          <option value="Bhavnagar">Bhavnagar</option>
          <option value="Junagath">Junagath</option>
          <option value="Div">Div</option>
          <option value="Daman">Daman</option>
        </select>
        <br />
        <br />
        <label>Gender:</label>
        <br />
        <input
          type="radio"
          name="radio"
          value="other"
          onChange={(e) => handlechange(e)}
        />
        <label>Male</label>
        <input
          type="radio"
          name="radio"
          value="male"
          onChange={(e) => handlechange(e)}
        />
        <label>Female</label>
        <input
          type="radio"
          name="radio"
          value="female"
          onChange={(e) => handlechange(e)}
        />
        <label>Other</label>

        <br />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default StudentForm;
