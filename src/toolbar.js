import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import './toolbar.css';

export default function Toolbar(data) {
  const { filter, setFilter, sort, setSort, viewOption, setViewOption } = data;
  const selectOptions = ['name', 'office'];
  return (
    <Card className="toolbar">
        <CardContent>
            <Grid container spacing={2}>
                <SortRow selectOptions={selectOptions} sort={sort} setSort={setSort}/>
                <FilterRow selectOptions={selectOptions} filter={filter} setFilter={setFilter}/>
                <ViewOptionRow selectOptions={['grid', 'list']} viewOption={viewOption} setViewOption={setViewOption}/>
            </Grid>
        </CardContent>
    </Card>
  );
}

function ViewOptionRow(data) {
    const { selectOptions, viewOption, setViewOption } = data;
    return [
        <Grid item xs={2} key='viewOptionLabel' className="centeredText">
            <InputLabel>
                Select View Option
            </InputLabel>
        </Grid>,
        <Grid item xs={2} key='viewOptionSelect'>
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <Select value={viewOption}
                        onChange={event => setViewOption(event.target.value)}
                    >
                        {selectOptions.map(option => (
                            <MenuItem key={option} value={option}>{option}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>
        </Grid>
    ];
}

function SortRow(data) {
    const { selectOptions, sort, setSort } = data;
    return [
        <Grid item xs={2} key='sortLabel' className="centeredText">
            <InputLabel>
                Sort by  {sort.byDescending ? 'Descending' : 'Ascending'}
            </InputLabel>
        </Grid>,
        <Grid item xs={2}  key='sortSelect'>
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
        </Grid>,
        <Grid item xs={2} key='sortSwitch'>
            <Switch checked={sort.byDescending}
                onChange={event => setSort({ byDescending: event.target.checked, toSortBy: sort.toSortBy })} />
        </Grid>
    ];
}

function FilterRow(data) {
    const { selectOptions, filter, setFilter } = data;
    return [
        <Grid item xs={2} key='filterLabel' className="centeredText">
            <InputLabel>
                Filter by
            </InputLabel>
        </Grid>,
        <Grid item xs={2} key='filterSelect'>
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
        </Grid>,
        <Grid item xs={2} key='filterInput'>
            <Input value={filter.searchString}
                onChange={event => setFilter({ searchString: event.target.value, toFilterBy: filter.toFilterBy })} />
        </Grid>
    ];
}