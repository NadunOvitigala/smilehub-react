import { useState } from "react";
import "./Appointment.css";

export default function Appointment() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const response = await fetch(
        "https://d8ttkphnxe.execute-api.ap-south-1.amazonaws.com/book-appointment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) throw new Error("Request failed");

      setStatus("✅ Appointment booked successfully!");
      setFormData({
        name: "",
        age: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        message: "",
      });
    } catch {
      setStatus("❌ Failed to book appointment. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="appointment" id="appointment">
      <h2>Book an Appointment</h2>

      <form className="appointment-form" onSubmit={handleSubmit}>
        <input name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
        <input name="age" type="number" placeholder="Age" value={formData.age} onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input name="phone" type="tel" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
        <input name="date" type="date" value={formData.date} onChange={handleChange} required />
        <input name="time" type="time" value={formData.time} onChange={handleChange} required />

        <textarea
          name="message"
          placeholder="Message / Symptoms / Notes"
          value={formData.message}
          onChange={handleChange}
        />

        <button className="btn" type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit Appointment"}
        </button>

        {status && <p className="form-status">{status}</p>}
      </form>
    </section>
  );
}
