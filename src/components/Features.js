function Features() {
  const features = [
    { title: "Fast", desc: "Optimized React components for speed." },
    { title: "Responsive", desc: "Looks great on all devices." },
    { title: "Modern UI", desc: "Clean and minimal design." }
  ];

  return (
    <section className="features">
      {features.map((item, index) => (
        <div key={index} className="card">
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
        </div>
      ))}
    </section>
  );
}

export default Features;
