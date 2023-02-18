import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import BusList from "./components/BusList";
import Navbar from "./components/Navbar";
import SearchBus from "./components/SearchBus";
import Text from "./components/Text";
import BookBus from "./components/BookBus";
import Booked from "./components/Booked";

import './styles/app.scss';
import './styles/Navbar.scss';
import './styles/SearchBus.scss';
import './styles/Text.scss';
import './styles/BusList.scss';
import './styles/BookBus.scss';
import './styles/Booked.scss';

function App() {

  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [filter, setFilter] = useState([]);
  const [selectedBus, setSelectedBus] = useState({});

  const fetchApi = async () => {
      const url = `https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses?source=${source}&destination=${destination}`;

      const url2 = `https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses`; 
      
      await fetch(url).then((resp) => 
      resp.json()
      ).then((data) =>
        setData(data)
      );

      await fetch(url2).then((resp) =>
        resp.json()
      ).then((data) => {
          setData2(data);
 
          const filter = [...data];
          const filterData = filter.filter((data) => 
            data.source === source && data.destination === destination
          );
          setFilter(filterData);
        }
      )
  }

  useEffect(() => {
    fetchApi()
  }, []);


  return (
    <>
      <Navbar />
      <Router>
      <SearchBus 
        source = { source } 
        setSource = { setSource }
        destination = { destination } 
        setDestination = { setDestination }
        fetch = { fetchApi }
      />
      <Routes>
        <Route 
          path="/" 
          element = { <Text /> } 
        />
        <Route 
          path="/buslist" 
          element = { 
            <BusList 
              data = { data } 
              data2 = { data2 }
              source = { source }
              destination = { destination }
              filter = { filter }
              setSelectedBus = { setSelectedBus }
            />
          } 
        />
        <Route 
          path="/bookbus" 
          element = { <BookBus selectedBus = { selectedBus } /> } 
        />
        <Route 
          path="/booked"  
          element = { <Booked /> }
        />
      </Routes>
    </Router>
    </>
  );
}

export default App;