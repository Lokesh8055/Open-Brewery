import React, { useReducer } from 'react';
import axios from 'axios';
import BreweryContext from './breweryContext';
import BreweryReducer from './breweryReducer';

import {
  SEARCH_BREWERIES,
  GET_BREWERY,
  CLEAR_BREWERIES,
  SET_LOADING,
} from '../types';

const BreweryState = (props) => {
  const initialState = {
    breweries: [],
    brewery: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(BreweryReducer, initialState);

  //Search Brewery
  const searchBreweries = async (text) => {
    setLoading();

    const res = await axios.get(
      `https://api.openbrewerydb.org/breweries/search?query=${text}`
    );

    dispatch({
      type: SEARCH_BREWERIES,
      payload: res.data,
    });
  };

  //Get single Brewery
  const getBrewery = async (id) => {
    setLoading();

    const res = await axios.get(
      `https://api.openbrewerydb.org/breweries/${id}`
    );

    dispatch({
      type: GET_BREWERY,
      payload: res.data,
    });
  };

  //Clear brewery
  const clearBrewery = () => dispatch({ type: CLEAR_BREWERIES });

  //set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <BreweryContext.Provider
      value={{
        breweries: state.breweries,
        brewery: state.brewery,
        loading: state.loading,
        searchBreweries,
        clearBrewery,
        getBrewery,
      }}
    >
      {props.children}
    </BreweryContext.Provider>
  );
};

export default BreweryState;
