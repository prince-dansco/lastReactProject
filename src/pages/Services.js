import React from 'react';
import '../cssPages/services.css';

const Services = () => {
  return (
    <div className="services-container">
      <div className="services-header">
        <h1>Our Services</h1>
        <p>We specialize in providing top-notch frontend development services to help you build stunning and responsive web applications.</p>
      </div>
      
      <div className="service-card">
        <h2>Frontend Development</h2>
        <p>
          Our frontend development services ensure that your web application looks beautiful and performs seamlessly across all devices. We use the latest technologies to create interactive and user-friendly interfaces.
        </p>
        <h3>Technologies We Use:</h3>
        <div className="technologies">
          <div className="technology">HTML5</div>
          <div className="technology">CSS3</div>
          <div className="technology">JavaScript</div>
          <div className="technology">React</div>
          <div className="technology">Bootstrap</div>
          <div className="technology">Tailwind CSS</div>
          <div className="technology">mui</div>
        </div>
      </div>

      <div className="service-card">
        <h2>Benefits of Our Services</h2>
        <p>
          Choosing our frontend development services comes with several benefits:
        </p>
        <ul>
          <li>Responsive Design: We create web applications that work flawlessly on all devices, from desktops to mobile phones.</li>
          <li>Performance Optimization: Our code is optimized for speed, ensuring fast load times and a smooth user experience.</li>
          <li>SEO Friendly: We follow best practices to ensure your web application is search engine friendly.</li>
          <li>Modern Technologies: We stay updated with the latest trends and technologies in frontend development.</li>
          <li>Custom Solutions: We provide tailored solutions to meet your specific business needs.</li>
        </ul>
      </div>
    </div>
  );
};

export default Services;
