import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>How to Find Us</h2>

      <a
        href="https://maps.app.goo.gl/fV69n2VRak331RUz9"
        target="_blank"
        rel="noopener noreferrer"
        className="btn map-btn"
      >
        View on Google Map
      </a>

      <div className="contact-info">
        <p><strong>Phone:</strong> 0777421620</p>
        <p><strong>Email:</strong> mkovitigala@gmail.com</p>
      </div>
    </section>
  );
}
