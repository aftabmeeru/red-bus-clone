import React from 'react';
import { useNavigate } from 'react-router-dom';

const BusList = ({ filter, setSelectedBus }) => {

    const bookbus = useNavigate();
    const goToBook = () => {
        bookbus("/bookbus");
    }

  return (
    <div className='bus-list-container'>
        <div className='bus-list-main'>
            <div className="bus-list-head">
                <h1>sort by : </h1>
                <p>Departure</p>
                <p>Arrival</p>
                <p>Rating</p> 
                <p>Price</p>
            </div>
        </div>
        {
            filter && filter.map((details, key) => (
                <div className='bus-list-main' key = { key } >
                    <div className="bus-head" onClick = { () => {
                        goToBook();
                        setSelectedBus(details);
                    } } >
                        <h2> { details.busName } </h2>
                        <div className="departure">
                            <p>departure</p>
                            <h2> { details.departureTime } </h2>
                        </div>
                        <div className="arrival">
                            <p>arrival</p>
                            <h2> { details.arrivalTime } </h2>
                        </div>
                        <h2 className='rating'>9 / 10</h2>
                        <h2> { details.ticketPrice } /- </h2>
                    </div>
                </div>
            ))
        }
    </div> 
  );
}

export default BusList;