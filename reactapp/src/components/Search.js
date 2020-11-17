import React, { useState, useEffect } from "react";
import SearchFrom from '/SearchForm.js';
import API from "/utils/API";

function Search(){
  const [result, setResult] = useState({})
  const [search, setSearch] = useState("")

  useEffect(function(){
    searchEmployee("")
  },[])

  async function searchEmployee(query){
    const response = await API.search(query)
    console.log(`searched movie:`,result.data)
    setResult(response.data)
  };
  function handleInputChange(event){
    const {name, value}= event.target;
    console.log(`name:${name}, value:${value}`)
    if(name==="search"){
    setSearch(value)
    }
  }

  function handleFormSubmit(event){
    event.preventDefault();
  
    searchEmployee(search)
  }

 
    return (

    <SearchFrom
      value={search}
      handleInputChange={handleInputChange}
      handleFormSubmit={handleFormSubmit}
    />
  
    );
}

export default Search;