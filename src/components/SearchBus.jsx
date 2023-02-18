import React from 'react';
import { FaExchangeAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const SearchBus = ({source, setSource, destination, setDestination, fetch}) => {
  
  function swap() {
    const temp = source;
    setSource(destination); 
    setDestination(temp);
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch();
  }

  function handleSourceChange(e) {
    setSource(e.target.value);
  }

  function handleDestChange(e) {
    setDestination(e.target.value);
  }

  return (
    <div className = 'form-container'>
      <form className = 'form' onSubmit = { handleSubmit }>
        <input 
          type = "text" 
          placeholder = 'From' 
          onChange = { handleSourceChange }
          value={ source }
        />
        <span onClick = { () => swap() }>
          <FaExchangeAlt />
        </span>
        <input 
          type = "text" 
          placeholder = 'To' 
          onChange = { handleDestChange }
          value = { destination }
        />
        <input type = "date" />
        <button onClick = { handleSubmit }>
          <NavLink to = { "/buslist" } >SEARCH BUSES</NavLink>
        </button>
      </form>
    </div>
  );
}

export default SearchBus;