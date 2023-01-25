import React from 'react';
import { FaExchangeAlt } from 'react-icons/fa';

const SearchBus = () => {

    function handleSubmit(e) {
        e.preventDefault();
    }

  return (
    <div className='form-container'>
        <form className='form' onSubmit={ handleSubmit }>
            <input type="text" placeholder='From' />
            <span><FaExchangeAlt /></span>
            <input type="text" placeholder='To' />
            <input type="date" />
            <button>SEARCH BUSES</button>
        </form>
    </div>
  );
}

export default SearchBus;