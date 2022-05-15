import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './colleague-card.css';

export default function Toolbar(data) {
  const { filter, setFilter } = data;
  return (
    <Grid container spacing={2}>
        <FilterRow selectOptions={['name', 'office']} filter={filter} setFilter={setFilter}/>
    </Grid>
  );
}

function FilterRow(data) {
    const { selectOptions, filter, setFilter } = data;
    return [
        <Grid item xs={2}>
            <InputLabel>
                Filter by
            </InputLabel>
        </Grid>,
        <Grid item xs={2}>
          <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <Select value={filter.toFilterBy}
                    onChange={event => setFilter({ searchString: filter.searchString, toFilterBy: event.target.value })}
                >
                    {selectOptions.map(option => (
                        <MenuItem value={option}>{option}</MenuItem>
                    ))}
                </Select>
              </FormControl>
          </Box>
        </Grid>,
        <Grid item xs={8}>
            <Input value={filter.searchString}
                onChange={event => setFilter({ searchString: event.target.value, toFilterBy: filter.toFilterBy })} />
        </Grid>
    ];
}