import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BreweryItem = ({ brewery: { name, brewery_type, city, id } }) => {
  return (
    <div className='card text-center border-secondary m-3 w-75 p-2 mx-auto'>
      <div className='card-header text-white bg-info'>
        <h1 className='display-6'>{name}</h1>
      </div>
      <div className='card-body'>
        <h3>
          {brewery_type} - <span>{city}</span>
        </h3>
      </div>
      <div className='card-footer '>
        <div>
          <Link to={`/brewery/${id}`} className='btn btn-dark btn-sm my-1'>
            More
          </Link>
        </div>
      </div>
    </div>
  );
};

BreweryItem.propTypes = {
  brewery: PropTypes.object.isRequired,
};

export default BreweryItem;
