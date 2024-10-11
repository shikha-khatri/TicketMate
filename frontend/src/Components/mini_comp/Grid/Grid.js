import React from 'react'
import PropTypes from 'prop-types'
import './Grid.css'

const Grid = ({ images, heading }) => {
  return (
    <div className="grid-container">
      <h1 className="grid-heading">{heading}</h1>
      <div className="grid">
        {images.map((image, index) => (
          <div className="grid-item" key={index}>
            <img src={image} alt={`image-${index}`} />
          </div>
        ))}
      </div>
    </div>
  )
}

Grid.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
  heading: PropTypes.string,
}

Grid.defaultProps = {
  images: [],
  heading: '',
}

export default Grid
