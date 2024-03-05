import { faGlobe, faBrain, faCode, faVideo, faImage, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import './Ai.css';

const CATEGORY_OPTIONS = [
  { name: 'All', icon: faGlobe },
  { name: 'AI', icon: faBrain },
  { name: 'Development', icon: faCode },
  { name: 'Video Editor', icon: faVideo },
  { name: 'Youtube Tools', icon: faYoutube },
  { name: 'Image Generator', icon: faImage }
];

const Movies = ({ movies }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const handleCategoryChange = useCallback((category) => {
    setSelectedCategory(category);
  }, []);

  const handleImageClick = useCallback((movie) => {
    if (movie && movie.url) {
      window.open(movie.url, '_blank');
    } else {
      alert("Failed to open movie. Please try again later.");
    }
  }, []);

  const filteredMovies = useMemo(() => {
    let filtered = movies.filter(movie => selectedCategory === 'All' || movie.category === selectedCategory);
    if (searchQuery.trim() !== '') {
      filtered = filtered.filter(movie =>
        movie.title.toLowerCase().includes(searchQuery.trim().toLowerCase())
      );
    }
    return filtered;
  }, [selectedCategory, searchQuery, movies]);

  return (
    <div>
      <CategorySelect
        selectedCategory={selectedCategory}
        handleCategoryChange={handleCategoryChange}
      />
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <MovieGrid
        filteredMovies={filteredMovies}
        handleImageClick={handleImageClick}
      />
    </div>
  );
};

Movies.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      imageUrl: PropTypes.string,
      title: PropTypes.string,
      category: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const CategorySelect = ({ selectedCategory, handleCategoryChange }) => (
  <div className="category-select" role="radiogroup" aria-label="Movie Categories">
    <div id="category">
      {CATEGORY_OPTIONS.map((category, index) => (
        <React.Fragment key={index}>
          <input
            type="radio"
            id={category.name.toLowerCase()}
            name="category"
            value={category.name}
            checked={selectedCategory === category.name}
            onChange={() => handleCategoryChange(category.name)}
            aria-label={category.name}
            tabIndex="0"
          />
          <label htmlFor={category.name.toLowerCase()} className="category-label">
            <FontAwesomeIcon icon={category.icon} />
            <span className="category-tooltip">{category.name}</span>
          </label>
        </React.Fragment>
      ))}
    </div>
  </div>
);

CategorySelect.propTypes = {
  selectedCategory: PropTypes.string.isRequired,
  handleCategoryChange: PropTypes.func.isRequired,
};

const SearchBar = ({ searchQuery, setSearchQuery }) => (
  <div className="search-container">
    <div className="search-bar">
      <FontAwesomeIcon icon={faSearch} className="search-icon" />
      <input
        type="text"
        placeholder="Search Ai"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input"
        aria-label="Search AI Movies"
      />
    </div>
  </div>
);

SearchBar.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  setSearchQuery: PropTypes.func.isRequired,
};

const MovieGrid = ({ filteredMovies, handleImageClick }) => (
  <div className="img-grid">
    {filteredMovies.map((movie, index) => (
      <MovieCard key={index} movie={movie} handleImageClick={handleImageClick} index={index} />
    ))}
  </div>
);
MovieGrid.propTypes = {
  filteredMovies: PropTypes.array.isRequired,
  handleImageClick: PropTypes.func.isRequired,
};
const MovieCard = ({ movie, handleImageClick, index }) => (
  <div className="img-item" onClick={() => handleImageClick(movie)}>
    <div className={`img-overlay ${movie.clicked ? 'active' : ''}`}>
      <p style={{ fontWeight: 'bolder', marginTop: '20px' }}>{movie.title}</p>
      <p>{movie.description}</p>
    </div>
    <img
      src={movie.imageUrl || 'default-movie-image-url.jpg'}
      alt={movie.title || `Movie ${index + 1} (opens in a new tab)`}
      className="img-item-img movie-image"
      style={{ width: '15rem', height: '8rem' }}
      onClick={() => handleImageClick(movie)} // Add onClick event handler
    />
  </div>

);
MovieCard.propTypes = {
  movie: PropTypes.shape({
    url: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  handleImageClick: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};
export default React.memo(Movies);