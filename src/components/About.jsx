import "./About.css";

export default function About() {
    return (
      <section className="about">
        <img src="/images/dentist.jpg" alt="Dentist" />
        <div>
          <h2>About the Dental Surgeon</h2>
          <p>
            Dr. M.K. Ovitigala is a highly experienced dental surgeon committed
            to providing quality oral healthcare using modern techniques.
          </p>
          <ul>
            <li>✔ Experienced Dentist</li>
            <li>✔ Friendly Clinic Near You</li>
          </ul>
        </div>
      </section>
    );
  }
  