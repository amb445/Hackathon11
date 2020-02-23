import React from 'react';
import logo from './logo.svg';
import DataTable from './DataTable';
import ListByPercent from './ListByPercent';
import './App.css';
import {
  Route,
  NavLink,
  HashRouter,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
       <HashRouter>
      <div style={{ display: "flex" }}>
        <div
          style={{
            padding: "0px",
            width: "15%",
            background: "#f0f0f0",
            margin :"10px"
          }}>
          <div className="navbar-header">
         

          <h2 >College Financial Data</h2>
      </div>      
            <ul style={{ listStyleType: "none", padding: 20 }}>
            <li className="RowStyle">
              <Link to="/" exact={true}> Amount</Link>
            </li>
            <li className="RowStyle">
              <Link to="/Percentage">  Percentage</Link>
            </li>
            <li className="RowStyle">
              <Link to="/State"> State</Link>
            </li >
          </ul>
         
    
          </div>      
          <div style={{ flex: 1, padding: "10px", margin: "20px" }}>
          
            <Route exact path="/" component={ListByPercent}/>
            <Route path="/Percentage" component={ListByPercent}/>       
            <Route path="/State" component={ListByPercent}/>    
          </div>
        </div>
      </HashRouter>
     
    </div>
  );
}

export default App;
