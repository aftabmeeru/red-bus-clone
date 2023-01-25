import React from "react";
import Navbar from "./components/Navbar";
import SearchBus from "./components/SearchBus";
import Text from "./components/Text";

import './styles/app.scss';
import './styles/Navbar.scss';
import './styles/SearchBus.scss';
import './styles/Text.scss';

function App() {

  return (
    <div>
      <Navbar />
      <SearchBus />
      <Text />
    </div>
  );
}

export default App;