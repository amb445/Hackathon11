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
         

          <a className="navbar-brand" href="#"><h4>Merit Scholarship</h4></a>
      </div>      
            <ul style={{ listStyleType: "none", padding: 20 }}>
            <li className="RowStyle">
              <Link to="/" exact={true}> Percentage</Link>
            </li>
            <li className="RowStyle">
              <Link to="/MaxAmount">  Percentage</Link>
            </li>
            <li className="RowStyle">
              <Link to="/MaxStudents"> Percentage</Link>
            </li >
          </ul>
         
    
          </div>      
          <div style={{ flex: 1, padding: "10px" }}>
          
             <Route exact path="/" component={ListByPercent}/>
            <Route path="/Amount" component={DataTable}/>         
          </div>
        </div>
      </HashRouter>
     
    </div>
  );
}

export default App;
