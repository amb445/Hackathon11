import DataTable from './DataTable';
import axios from 'axios';
import React, { Component } from 'react'

function createData(college, TotalAmount, NumberofStudents, PercentageofStudents, AverageAid, FederalAidTotal, LocalGrandAidTotal, InstitutionalAid) {
    return { college, TotalAmount, NumberofStudents, PercentageofStudents, AverageAid, FederalAidTotal, LocalGrandAidTotal, InstitutionalAid };
  }
class    ListByPercent extends React.Component  {
  
    constructor(props)
    {
    super(props);     
    this.state =  { rows :  [
        createData('College Name 1', 159, 6, 24, 4.0,1,1,1,1),
        createData('College Name 2', 237, 9, 37, 4.3,1,1,2,2,2),
        createData('College Name 3', 262, 16, 24, 6.0,3,3,3,3,4),
        createData('College Name 4', 305, 3, 67, 4.3,5,5,5,5,6),
        createData('College Name 5', 356, 16, 49, 3.9,8,8,8,8,8),
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
