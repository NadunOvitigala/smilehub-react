import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">SmileHub</h2>

      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#appointment">Appointment</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <a href="tel:+94777421620" className="btn">
        Call +94 777 421 620
      </a>
    </nav>
  );
}
