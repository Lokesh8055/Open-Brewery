import React, { useState, useContext } from 'react';
import BreweryContext from '../../context/brewery/breweryContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
  const breweryContext = useContext(BreweryContext);

  const alertContext = useContext(AlertContext);

  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      alertContext.setAlert('Please enter something', 'danger');
    } else {
      breweryContext.searchBreweries(text);
      setText('');
    }
  };

  const onChange = (e) => setText(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <input
            type='text'
            name='text'
            className='form-control mx-auto w-50 mb-3'
            placeholder='Search Breweries...'
            value={text}
            onChange={onChange}
          />
        </div>
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block w-50 mx-auto mb-3'
        />
      </form>
      {breweryContext.breweries.length > 0 && (
        <button
          className='btn btn-light btn-block w-50 mx-auto'
          onClick={breweryContext.clearBrewery}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
