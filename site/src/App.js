import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
};


const Header = () => {
  return (
    <header className="header">
      <div className="logo">MyLogo</div>
      <nav>
        <ul>
          <li><a href="#propouse">Propouse</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#contacts">Contacts</a></li>
        </ul>
      </nav>
    </header>
  );
};


const Hero = () => {
  return (
    <section className="hero">
      <h1>Welcome to Our Website</h1>
      <p>Here is some information about our site. We aim to provide the best services for you.</p>
      <button>Learn More</button>
    </section>
  );
};


const Features = () => {
  const features = [
    { title: 'Feature 1', description: 'Description of feature 1', img: 'https://via.placeholder.com/150' },
    { title: 'Feature 2', description: 'Description of feature 2', img: 'https://via.placeholder.com/150' },
    { title: 'Feature 3', description: 'Description of feature 3', img: 'https://via.placeholder.com/150' }
  ];

  return (
    <section className="features">
      <h2>Our Features</h2>
      <div className="feature-cards">
        {features.map((feature, index) => (
          <div className="card" key={index}>
            <img src={feature.img} alt={feature.title} />
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};


const Footer = () => {
  return (
    <footer className="footer">
      <nav>
        <ul>
          <li><a href="#propouse">Propouse</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#contacts">Contacts</a></li>
        </ul>
      </nav>
      <p>&copy; 2024 MyCompany. All rights reserved.</p>
    </footer>
  );
};

export default App;
