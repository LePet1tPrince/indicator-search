import { useState } from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import useFetch from './customHooks/useFetch';
import irt from './assets/IRT.json'
import DisplayTable from './DisplayTable';
// import { IRT } from './assets/IRT'

function SearchBar() {

    const [searchTerm, setSearchTerm] = useState('')
    const searchTerms = searchTerm.split(" ")
    // const [irt, setIRT] = useState(IRT)
    // const [ data, setData, isLoading, isError ] = useFetch('./assets/IRT.js')
    // let admins = require('./assets/IRT.json');
    // const sample = irt[0:100]
    const filteredRows = irt.filter(item => (item['Indicator Statement'] !== null) && searchTerms.every(term => item['Indicator Statement'].includes(term)))
    function handleChange(e) {
        setSearchTerm(e.target.value)
    }
    return (
        <div>

        <Box
        component="form"
        sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        >
        <TextField id="outlined-basic" label="Outlined" variant="outlined" value={searchTerm} onChange={handleChange} />

        {/* {filteredRows.map((item, index) => {
            
            return (<p key={index}> {item["Indicator Statement"]} - {item["Indicator Code"]}</p>)
            
            
        })} */}

      </Box>
        <DisplayTable filteredRows={filteredRows} />
        </div>
    )
};

export default SearchBar;