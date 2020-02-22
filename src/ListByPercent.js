import DataTable from './DataTable';
import axios from 'axios';
import React, { Component } from 'react'

function createData(college, MaximumAmount, MaximumPercentage, NumberofStudents, EarlyAdmission) {
    return { college, MaximumAmount, MaximumPercentage, NumberofStudents, EarlyAdmission };
  }
class    ListByPercent extends React.Component  {
  
    constructor(props)
    {
    super(props);     
    this.state =  { rows :  [
        createData('College Name 1', 159, 6.0, 24, 4.0),
        createData('College Name 2', 237, 9.0, 37, 4.3),
        createData('College Name 3', 262, 16.0, 24, 6.0),
        createData('College Name 4', 305, 3.7, 67, 4.3),
        createData('College Name 5', 356, 16.0, 49, 3.9),
      ]}      
    
  }  
 
  
  componentDidMount() 
  { 
    var data =[]
    
    const url = 'https://f7ybz24ol7.execute-api.us-east-1.amazonaws.com/dev/colleges/meritaid';
    axios.get(url)
      .then(res => {
         data  = res.data; 
        
         this.setState({ rows : data}) 
      })
      .catch(err => {
       // alert("Cannot get " + url + ": " + err)
      })     
    
  }
  render()
  { 
    return (
        <DataTable rows={this.state.rows}></DataTable>
    )
  }
}
 export  default ListByPercent;
