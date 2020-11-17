import Search from './components/Search.js';
import Header from './components/Header.js';
import Directory from '../components/Directory.js';
import React from "react";
import EmployeeContext from './utils/EmployeeContext';

function App() {
  const {directory, setDirectory}
  return (
    <EmployeeContext.Provider>
      <div className="App">
        <Header/>
        <Search/>
        <Directory/>

      </div>
    </EmployeeContext.Provider>
  )
}

export default App;
