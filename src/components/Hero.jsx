import "./Hero.css";

export default function Hero() {
  return (
    <section
      className="hero"
      id="home"
      style={{ backgroundImage: "url(/images/hero.jpg)" }}
    >
      <h1>
        A Better Life Starts with a
        <br />
        Beautiful Smile
      </h1>
      <a href="#appointment" className="btn">
        Book An Appointment
      </a>
    </section>
  );
}
