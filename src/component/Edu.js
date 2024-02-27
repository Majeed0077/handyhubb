import React from 'react';
import PropTypes from 'prop-types';

function Links({ links }) {
  const handleImageClick = (link) => {
    if (link && link.url) {
      window.open(link.url, '_blank');
    } else {
      console.error("Invalid link:", link);
    }
  };
  return (
    <div>
      <h1>Educational Sites</h1>
      <div className="img-grid">
        {links.map((link, index) => (
          <div key={index} className="img-item" onClick={() => handleImageClick(link)}>
            <div className="img-overlay">
              <span style={{fontSize:'20px', fontWeight:'bolder'}}>{link.title}</span>
            </div>
            <img
              src={link.imageUrl || 'default-image-url.jpg'}
              alt={link.title || `Link ${index + 1} (opens in a new tab)`}
              className="img-item-img link-image"
              style={{ width: '12rem', height: '7rem'}}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
Links.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      imageUrl: PropTypes.string,
      title: PropTypes.string,
    })
  ).isRequired,
};
export default Links;
