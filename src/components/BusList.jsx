import React from 'react';
import { useNavigate } from 'react-router-dom';

const BusList = ({ filter, setSelectedBus }) => {

    const bookbus = useNavigate();
    const goToBook = () => {
        bookbus("/bookbus");
    }

  return (
    <div className='bus-list-container'>
        {
            filter && filter.map((details, key) => (
                <div className='bus-list-main' key = { key } >
                    <div className="bus-head" 
                    onClick = { () => {
                        goToBook();
                        setSelectedBus(details);
                    } } 
                    >
                        <div className="name">
                            <p>Bus Name</p>
                            <h2> { details.busName } </h2>
                        </div>
                        <div className="departure">
                            <p>Departure</p>
                            <h2> { details.departureTime } </h2>
                        </div>
                        <div className="arrival">
                            <p>Arrival</p>
                            <h2> { details.arrivalTime } </h2>
                        </div>
                        <div className="rating">
                            <p>Rating</p>
                            <h2 className='rating'>9 / 10</h2>
                        </div>
                        <div className="price">
                            <p>Price</p>
                            <h2> { details.ticketPrice } /- </h2>
                        </div>
                    </div>
                </div>
            ))
        }
    </div> 
  );
}

export default BusList;