import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ColleagueCard from './colleague-card';
import Toolbar from './toolbar';
import { fetchData, filterColleagueList } from './extras';
import './App.css';

export default function App() {
  const [colleagues, setColleagues] = React.useState(null);
  const [filter, setFilter] = React.useState({ searchString: '', toFilterBy: 'name' });
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
      <Toolbar filter={filter} setFilter={setFilter}/>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {colleagues
            .filter(colleague => filterColleagueList(colleague, filter))
            .map(colleague => (
              <Grid item xs={12} sm={6} md={4} lg={3}>
                  <ColleagueCard colleague={colleague} />
              </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}
