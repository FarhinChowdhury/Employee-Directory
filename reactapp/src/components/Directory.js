// call on ajax to populate the directory with names 
import React, { useState, useEffect } from "react";
import Search from '/Search.js';
import API from "/utils/API";

<ul className="list-group">
{props.results.map(result => (
  <li className="list-group-item" key={result.id}>
    <img alt={result.title} className="img-fluid" src={result.images.original.url} />
  </li>
))}
</ul>
function Directory(){
    function DirectoryInfo(props){
        {props.results.map(result=>(
            <li>
                <td>{result.picture.thumbnail}</td>
                <td>{result.title}</td>
                <td>{result.first}</td>
                <td>{result.last}</td>
                <td>{result.phone}</td>
                <td>{result.email}</td>
                <td>{result.dob}</td>
            </li>
        ))}

    }
    return(
        <table>
            <tr>
                <th>Photo</th>
                <th>Title</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>DOB</th>
            </tr>
        </table>
        <DirectoryInfo/>
    )
    

}

