import React from 'react'
import { useNavigate } from 'react-router-dom';

const Booked = () => {

    const backHome = useNavigate();

    const source = localStorage.getItem("source");
    const destination = localStorage.getItem("destination");
    const totalSeats = localStorage.getItem("totalSeats");
    const totalPrice = localStorage.getItem("totalPrice")
    const arrivalTime = localStorage.getItem("arrivalTime");

  return (
    <div className='ticket-container'>
        <div className="ticket-details">
            <div className="details">
                <p> <b> { source } </b> &rarr; <b> { destination } </b> </p>
            </div>
            <div className="details">
                <p>Total Number of Seats : <b> { totalSeats } </b> </p>
            </div>
            <div className="msg details">
                <p> Total Price : <b> { totalPrice }.00 INR </b> </p>
            </div>
            <div className="details">
                <p>Bus will be arrive at <b> { arrivalTime } </b> </p>
            </div>
            <div className="details">
                <p>Thank you for choosing Red Bus</p>
            </div>
            <div className="details">
                <p>Your Tickets will be generated within <b>2 hours</b> </p>
            </div>
        </div>
        <button onClick={ () => backHome("/") } >Back To Home</button>
    </div>
  );
}

export default Booked;