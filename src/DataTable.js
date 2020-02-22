import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


/* const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(college, MaximumAmount, MaximumPercentage, NumberofStuents, Test) {
  return { college, MaximumAmount, MaximumPercentage, NumberofStuents, Test };
}

const rows = [
  createData('College Name 1', 159, 6.0, 24, 4.0),
  createData('College Name 2', 237, 9.0, 37, 4.3),
  createData('College Name 3', 262, 16.0, 24, 6.0),
  createData('College Name 4', 305, 3.7, 67, 4.3),
  createData('College Name 5', 356, 16.0, 49, 3.9),
];
const classes = useStyles(); */
class DataTable extends Component {
  constructor(props)
    {
        super(props);   
        this.state = { rows : this.props.rows}    
    }  
    render() { 
  return (
    <TableContainer component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>College</TableCell>
            <TableCell align="center">Maximum Amount</TableCell>
            <TableCell align="center">Maximum Percentage</TableCell>
            <TableCell align="center">Number of Students</TableCell>
            <TableCell align="center">Early Admission</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.rows.map(row => (
            <TableRow key={row.college}>
              <TableCell component="th" scope="row">
                {row.college}
              </TableCell>
              <TableCell align="center">{row.MaximumAmount}</TableCell>
              <TableCell align="center">{row.MaximumPercentage}</TableCell>
              <TableCell align="center">{row.NumberofStudents}</TableCell>
              <TableCell align="center">{row.EarlyAdmission}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
}
export default DataTable;