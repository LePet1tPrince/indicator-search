import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import irt from './assets/IRT.json'




export default function DisplayTable({filteredRows}) {

    const copyToClipboard = async (text) => {
        try {
          await navigator.clipboard.writeText(text);
        //   alert('Text copied to clipboard:', text);
        } catch (error) {
          alert('Error copying to clipboard:', error);
        }
      };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{width: "400px"}}><Typography variant="h5">Indicator Statement</Typography></TableCell>
            <TableCell align="right"><Typography variant="h5">Indicator Code</Typography></TableCell>
            <TableCell align="right"><Typography variant="h5">Level</Typography></TableCell>
            <TableCell align="right"><Typography variant="h5">Sector</Typography></TableCell>
            <TableCell align="right"><Typography variant="h5">Subsector</Typography></TableCell>
            <TableCell align="right"><Typography variant="h5">Meta Code</Typography></TableCell>
            {/* <TableCell align="right"><Typography variant="h5">Meta Statement</Typography></TableCell> */}

            {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredRows.map((row, index) => {
            if (index < 100) {
                
                return (
                    <TableRow
                    key={index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
              <TableCell component="th" scope="row">
                {row["Indicator Statement"]}
              </TableCell>
              <TableCell align="right">
              <Tooltip title="Copy to Clipboard">
                <Button onClick={() => copyToClipboard(row["copy-Indicator Code"])}>{row["copy-Indicator Code"]}</Button>
                </Tooltip>
                </TableCell>
              <TableCell align="right">{row["level"]}</TableCell>
              
              <TableCell align="right">{row["Sector/Theme"]}</TableCell>
              <TableCell align="right">{row["Sub Sector/Sub Theme"]}</TableCell>
              <TableCell align="right">
                <Tooltip title={row['meta_statement']} placement="right">
                  <Button
                  onClick={() => copyToClipboard(row["Meta Link"])}
                  >
                    {row["Meta Link"]}
                    </Button>
              </Tooltip>
                </TableCell>
              {/* <TableCell align="right">{row['meta_statement']}
              
              </TableCell> */}

              {/* <TableCell align="right">{row.protein}</TableCell> */}
            </TableRow>)
            } 
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}