import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';




export default function DisplayTable({filteredRows}) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Indicator Statement</TableCell>
            <TableCell align="right">Indicator Code</TableCell>
            <TableCell align="right">Sector</TableCell>
            <TableCell align="right">Subsector</TableCell>
            {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredRows.map((row, index) => {
          return (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row["Indicator Statement"]}
              </TableCell>
              <TableCell align="right">{row["Indicator Code"]}</TableCell>
              <TableCell align="right">{row["Sector/Theme"]}</TableCell>
              <TableCell align="right">{row["Sub Sector/Sub Theme"]}</TableCell>
              {/* <TableCell align="right">{row.protein}</TableCell> */}
            </TableRow>)
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}