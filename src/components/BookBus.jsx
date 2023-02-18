import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import '../styles/BusList.scss';

const BookBus = ({ selectedBus }) => {

  const booked = useNavigate();

  const [ticket, setTicket] = useState(localStorage.getItem("ticketPrice"));

  localStorage.setItem("ticketPrice", selectedBus.ticketPrice);
  localStorage.setItem("source", selectedBus.source);
  localStorage.setItem("destination", selectedBus.destination);
  localStorage.setItem("arrivalTime", selectedBus.arrivalTime);
  localStorage.setItem("departureTime", selectedBus.departureTime);

  const submitDetails = (e) => {
    if(seats.length !== 0) {
      let cal = seats.length * localStorage.getItem("ticketPrice");
      localStorage.setItem("totalPrice", cal);
      setTicket(cal);
      localStorage.setItem("totalSeats", seats.length);
      booked("/booked");
    } else {
      document.querySelector(".msg").style.display = "Block";
      setTimeout(() => {
        document.querySelector(".msg").style.display = "none";
      }, 2000);
    }
  }

  let seats = [];
  const selectSeat = (e) => {
    if(!seats.includes(e.target.id)) {
      seats.push(e.target.id);
      document.getElementById(e.target.id).style.backgroundColor = "green";
    } else {
      seats.pop(e.target.id);
      document.getElementById(e.target.id).style.backgroundColor = "gray";
    }
    localStorage.setItem("Seats", JSON.stringify(seats));
  }

  return (
    <div className='seats-container'>
      {
        selectedBus && selectedBus.busName ? (
          <>
            <div className="bus-list-container">
              <div className='bus-list-main'>
                <div className="bus-head">
                  <h2> { selectedBus.busName } </h2>
                  <div className="departure">
                    <p>departure</p>
                    <h2> { selectedBus.departureTime } </h2>
                  </div>
                  <div className="arrival">
                    <p>arrival</p>
                    <h2> { selectedBus.arrivalTime } </h2>
                  </div>
                  <h2 className='rating'>9 / 10</h2>
                  <h2> { selectedBus.ticketPrice } /- </h2>
                </div>
              </div>
            </div>
            <div className="bus-seats">
              <div className="seats">
                <div id='double1' onClick={ selectSeat }></div>
                <div id='double2' onClick={ selectSeat }></div>
                <div id='double3' onClick={ selectSeat }></div>
                <div id='double4' onClick={ selectSeat }></div>
                <div id='double5' onClick={ selectSeat }></div>
                <div id='double6' onClick={ selectSeat }></div>
                <div id='double7' onClick={ selectSeat }></div>
                <div id='double8' onClick={ selectSeat }></div>
              </div>
              <div className="seats">
                <div id='double9'  onClick={ selectSeat }></div>
                <div id='double10' onClick={ selectSeat }></div>
                <div id='double11' onClick={ selectSeat }></div>
                <div id='double12' onClick={ selectSeat }></div>
                <div id='double13' onClick={ selectSeat }></div>
                <div id='double14' onClick={ selectSeat }></div>
                <div id='double15' onClick={ selectSeat }></div>
                <div id='double16' onClick={ selectSeat }></div>
              </div>
              <div className="seats single-seats">
                <div id='single1' onClick={ selectSeat }></div>
                <div id='single2' onClick={ selectSeat }></div>
                <div id='single3' onClick={ selectSeat }></div>
                <div id='single4' onClick={ selectSeat }></div>
                <div id='single5' onClick={ selectSeat }></div>
                <div id='single6' onClick={ selectSeat }></div>
                <div id='single7' onClick={ selectSeat }></div>
                <div id='single8' onClick={ selectSeat }></div>
              </div>
            </div>
            <h1><FaMinus /><FaMinus /><FaMinus /><FaMinus /><FaMinus /><FaMinus /><FaArrowRight /></h1>
            <button onClick = { submitDetails } >book ticket</button>
          </>
        ) : null
      }
    </div>
  );
}

export default BookBus;