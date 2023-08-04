import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getLocation } from '../redux/location/locationSlice';

export default function Navigation() {
  const dispatch = useDispatch();
  const [searchval, setSearchval] = useState('London');
  function searchHandler(searchval) {
    dispatch(getLocation(searchval));
    setSearchval('');
  }
  return (
    <div className="nav">
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          searchHandler(searchval);
        }}
      >
        Search
      </button>
      <input
        type="text"
        placeholder="search for location"
        onChange={(e) => {
          setSearchval(e.target.value);
        }}
      />

    </div>
  );
}
