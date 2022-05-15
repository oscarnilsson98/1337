import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ColleagueCard from './colleague-card';
import ColleagueListItem from './colleague-list-item';
import Toolbar from './toolbar';
import { fetchData, filterColleagueList, sortColleagueList } from './extras';
import './App.css';

export default function App() {
  const [colleagues, setColleagues] = React.useState(null);
  const [filter, setFilter] = React.useState({ searchString: '', toFilterBy: 'name' });
  const [sort, setSort] = React.useState({ byDescending: false, toSortBy: 'name' });
  const [viewOption, setViewOption] = React.useState('grid');
  useEffect(() => {
    fetchData(setColleagues);
  }, []);

  if (colleagues === null) {
    return 'loading';
  }
  return (
    <div className="App">
      <header className="App-header">
        <h2>The fellowship of tretton37</h2>
      </header>
      <Toolbar filter={filter} setFilter={setFilter} sort={sort} setSort={setSort}
        viewOption={viewOption} setViewOption={setViewOption} />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} data-testid="colleague-grid">
          {colleagues
            .filter(colleague => filterColleagueList(colleague, filter))
            .sort((a, b) => sortColleagueList(a, b, sort))
            .map((colleague, index) => 
            viewOption === 'grid' ? (
              <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                  <ColleagueCard colleague={colleague} />
              </Grid>
           ) : viewOption === 'list' ? (
            <Grid key={index} item xs={12}>
                <ColleagueListItem colleague={colleague} />
            </Grid>
           ) : 'An error occurred, you are allowed to panic')}
        </Grid>
      </Box>
    </div>
  );
}
