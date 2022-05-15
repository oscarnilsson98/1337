import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import './colleague-card.css';

export default function Toolbar(data) {
  const { filter, setFilter, sort, setSort } = data;
  const selectOptions = ['name', 'office'];
  return (
    <Box>
        <SortRow selectOptions={selectOptions} sort={sort} setSort={setSort}/>
        <FilterRow selectOptions={selectOptions} filter={filter} setFilter={setFilter}/>
    </Box>
  );
}

function FilterRow(data) {
    const { selectOptions, filter, setFilter } = data;
    return (
        <Grid container spacing={2}>
            <Grid item xs={2}>
                <InputLabel>
                    Filter by
                </InputLabel>
            </Grid>
            <Grid item xs={2}>
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <Select value={filter.toFilterBy}
                        onChange={event => setFilter({ searchString: filter.searchString, toFilterBy: event.target.value })}
                    >
                        {selectOptions.map(option => (
                            <MenuItem key={option} value={option}>{option}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>
            </Grid>
            <Grid item xs={8}>
                <Input value={filter.searchString}
                    onChange={event => setFilter({ searchString: event.target.value, toFilterBy: filter.toFilterBy })} />
            </Grid>
        </Grid>
    );
}

function SortRow(data) {
    const { selectOptions, sort, setSort } = data;
    return (
        <Grid container spacing={2}>
            <Grid item xs={2}>
                <InputLabel>
                    Sort by  {sort.byDescending ? 'Descending' : 'Ascending'}
                </InputLabel>
            </Grid>
            <Grid item xs={2}>
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <Select value={sort.toSortBy}
                        onChange={event => setSort({ byDescending: sort.byDescending, toSortBy: event.target.value })}
                    >
                        {selectOptions.map(option => (
                            <MenuItem key={option} value={option}>{option}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>
            </Grid>
            <Grid item xs={8}>
                <Switch checked={sort.byDescending}
                    onChange={event => setSort({ byDescending: event.target.checked, toSortBy: sort.toSortBy })} />
            </Grid>
        </Grid>
    );
}