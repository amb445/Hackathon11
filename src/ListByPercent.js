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
        createData('MIT', 1900, 6, 24, 4.0,1,1,1,1),
        createData('Alabama A & M University', 2700, 9, 37, 4.3,1,1,2,2,2),
        createData('J F Drake State Technical College', 5500, 16, 24, 6.0,3,3,3,3,4),
        createData('Gadsden State Community College', 7007, 3, 67, 4.3,5,5,5,5,6),
        createData('Oakwood University', 300, 16, 49, 3.9,8,8,8,8,8),
        
        createData('Talladega College', 300, 6, 24, 4.0,1,1,1,1),
        createData('Alabama State University', 237, 9, 37, 4.3,1,1,2,2,2),
        createData('H Councill Trenholm State Technical College', 262, 16, 24, 6.0,3,3,3,3,4),
        createData('Concordia College-Selma', 300, 3, 67, 4.3,5,5,5,5,6),
        createData('Tuskegee University', 300, 16, 49, 3.9,8,8,8,8,8),
         createData('Stanford University', 300, 16, 49, 3.9,8,8,8,8,8),
      ]}      
    
  }  
 
  
  componentDidMount() 
  { 
      document.title = 'College Financial Data';
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
