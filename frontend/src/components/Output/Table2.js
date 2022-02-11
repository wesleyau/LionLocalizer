import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { Tab } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles({
  tableCell: {
    padding: "0px 8px"
  }
});

const Table2 = (props) => {
    const classes = useStyles()

    const alignList = useSelector(state => state.align.align.array)
    console.log(alignList)
    console.log(alignList[1].locArray)

    return (
       <TableContainer component={Paper}>
      <Table sx={{ minWidth: 600 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell  style={{ width: "10%" }}>Haplotype</TableCell>
            <TableCell  style={{ width: "10%" }}>Mismatches</TableCell>
            <TableCell  style={{ width: "10%" }}>Matches</TableCell>
            <TableCell style={{ width: "10%" }}>locations</TableCell>
            <TableCell  style={{ width: "10%" }}>Papers</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {alignList.map((row) => (
            <TableRow
              key={row.id}
            >
              <TableCell >{row.haplotypeId}</TableCell>
              <TableCell >{row.mismatch}</TableCell>
              <TableCell >{row.match}</TableCell>
              <TableCell >{row.locArray.map((sub) => (
                 <li>
                   {sub.locationName}
                 </li>
              ))}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    );
  }
  
  export default Table2;