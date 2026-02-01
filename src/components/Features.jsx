import "./Features.css";

const features = [
    { title: "Experienced Dentist", text: "Years of trusted dental experience." },
    { title: "Advance Treatment", text: "Modern dentistry solutions." },
    { title: "Guaranteed Results", text: "Reliable and lasting care." },
    { title: "Modern Equipment", text: "Latest dental technology." },
  ];
  
  export default function Features() {
    return (
      <section className="features">
        <h2>Complete Care on Your Schedule</h2>
        <div className="grid">
          {features.map((f, i) => (
            <div className="card" key={i}>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  