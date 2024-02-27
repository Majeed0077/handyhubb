import React from 'react';
import Majeed from '../src/img/Majeedd.png';


const About = () => {
  return (
    <div>
      <div>
        <img src={Majeed} alt="About Us" style={{ width: '100%', height: 'auto' }} />
      </div>
      <div>
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dapibus semper mauris, vel viverra lorem placerat id.
          Duis non leo vitae metus consectetur accumsan eget sed elit. Duis a nisi eu purus aliquam feugiat.
        </p>
        <p>
          Fusce eu elit quis velit congue finibus. Integer eu semper urna. Sed tempus semper erat, eget fermentum turpis
          ultricies eget.
        </p>
        <p>
          Proin vel convallis eros. Nam mattis magna quis tellus lobortis, non rutrum tortor blandit. Cras et fermentum
          velit, eget efficitur quam.
        </p>
      </div>
    </div>
  );
};

export default About;
