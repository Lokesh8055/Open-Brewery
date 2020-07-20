import React, { useContext } from 'react';
import BreweryItem from './BreweryItem';
import Spinner from '../layout/Spinner';
import BreweryContext from '../../context/brewery/breweryContext';

const Breweries = () => {
  const breweryContext = useContext(BreweryContext);

  const { breweries, loading } = breweryContext;

  if (loading) {
    return <Spinner></Spinner>;
  } else {
    return (
      <div>
        <div className='card-columns'>
          {breweries.map((brewery) => (
            <BreweryItem brewery={brewery} key={brewery.id} />
          ))}
        </div>
      </div>
    );
  }
};

export default Breweries;
