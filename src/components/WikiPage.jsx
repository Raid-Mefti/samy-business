import React from "react";

const Wiki = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Company Wiki</h1>
      <p>
        Welcome to the company wiki! Here you can find all the information about
        our company, its mission, and values.
      </p>

      <section>
        <h2>About Us</h2>
        <p>
          Our company is dedicated to delivering high-quality products and
          services to our customers. We strive for excellence in everything we
          do.
        </p>
      </section>

      <section>
        <h2>Mission</h2>
        <p>
          To innovate and lead in our industry while maintaining a commitment to
          sustainability and community engagement.
        </p>
      </section>

      <section>
        <h2>Values</h2>
        <ul>
          <li>Integrity</li>
          <li>Innovation</li>
          <li>Customer Focus</li>
          <li>Teamwork</li>
          <li>Sustainability</li>
        </ul>
      </section>

      <footer
        style={{
          marginTop: "20px",
          borderTop: "1px solid #ccc",
          paddingTop: "10px",
        }}
      >
        <p>
          &copy; {new Date().getFullYear()} Your Company Name. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
};

export default Wiki;
