import "./Services.css";
CTA.css
const services = [
    "Dental X-Rays",
    "Dental Implants",
    "Cosmetic Dentistry",
    "Periodontal Disease",
    "Root Canals",
    "Extractions",
    "Teeth Whitening",
    "Braces & Implants",
  ];
  
  export default function Services() {
    return (
      <section className="services">
        <h2>Dentistry for Today's Lifestyle</h2>
        <div className="grid">
          {services.map((s, i) => (
            <div
              className="service-card"
              key={i}
              style={{ backgroundImage: "url(/images/service1.jpg)" }}
            >
              <span>{s}</span>
            </div>
          ))}
        </div>
      </section>
    );
  }
  