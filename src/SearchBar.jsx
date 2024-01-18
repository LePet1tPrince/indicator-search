import { useState } from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import irt from './assets/IRT.json'
import DisplayTable from './DisplayTable';
import Typography from '@mui/material/Typography';


function SearchBar() {

    const [searchTerm, setSearchTerm] = useState('')
    const searchTerms = searchTerm.split(" ")
   
    const filteredRows = irt.filter(item => (item['Indicator Statement'] !== null) && searchTerms.every(term => item['Indicator Statement'].toLowerCase().includes(term.toLowerCase())))
    function handleChange(e) {
        setSearchTerm(e.target.value)
    }
    return (
        <div >
            <Box 
            sx={{
                '& > :not(style)': { margin: "20px 0 20px 50px", width: '50%', alignItems: "center"},
            }}>

            
            <Typography variant="h2">Indicator Search App</Typography>
            <Typography>This app is intended for easily searching for indicator statements. 
                The search box will filter the IRT for indicators where the statement contains all words (not necessairly in order)
                Powered by data from IRT_V13 on Jan 18, 2024. Any changes made to the file after that date will not show in this app.
                </Typography>
                <Typography>Update Jan 18 2024: Including Meta code and hover over meta code to see meta statement. Click on meta code to copy to clipboard.</Typography>
                <Typography>Written by Timmy Bender</Typography>
            </Box>

        <Box
        component="form"
        sx={{
            '& > :not(style)': { margin: "0 0 0 50px", width: '50ch' },
        }}
        noValidate
        autoComplete="off"
        >
        <TextField id="searchbar" label="Indicator Search" variant="outlined" value={searchTerm} onChange={handleChange} />

       

      </Box>
      <Box sx={{margin: "50px"}}>

        <DisplayTable filteredRows={filteredRows} />
      </Box>
        {/* {JSON.stringify(filteredRows)} */}
        </div>
    )
};

export default SearchBar;