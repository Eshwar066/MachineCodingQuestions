import { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <div>
      <h2>User Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={formData.name}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="tel"
          name="number"
          placeholder="Enter phone number"
          value={formData.number}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
        />

        <br /><br />

        <textarea
          name="address"
          placeholder="Enter address"
          value={formData.address}
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;