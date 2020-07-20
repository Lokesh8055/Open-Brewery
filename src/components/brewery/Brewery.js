import React, { Fragment, useContext, useEffect } from 'react';
import Spinner from '../layout/Spinner';
import BreweryContext from '../../context/brewery/breweryContext';
import { Link } from 'react-router-dom';

const Brewery = ({ match }) => {
  const breweryContext = useContext(BreweryContext);
  const { getBrewery, loading, brewery } = breweryContext;
  useEffect(() => {
    getBrewery(match.params.id);
  }, []);
  //eslint-disable-next-line

  const {
    street,
    state,
    postal_code,
    country,
    longitude,
    latittude,
    phone,
    website_url,
  } = brewery;

  if (loading) return <Spinner></Spinner>;

  return (
    <Fragment>
      <Link to='/' className='btn btn-light mb-3'>
        Back To Search
      </Link>
      <div className='row'>
        <div className='col-sm-6'>
          <div className='card'>
            <div className='card-body'>
              <h5 class='card-title'>{street}</h5>
              <h6 class='card-subtitle mb-2 text-muted'>{state}</h6>
              <p class='card-text'>{postal_code}</p>
              <a href='#' class='card-link'>
                {website_url}
              </a>
            </div>
          </div>
        </div>
        <div className='col-sm-6'>
          <div className='card'>
            <div className='card-body'>
              <h5 class='card-title'>{country}</h5>
              <h6 class='card-subtitle mb-2 text-muted'>{longitude}</h6>
              <p class='card-text'>{latittude}</p>
              <p class='card-text'>{phone}</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Brewery;
