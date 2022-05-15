import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ColleagueCard from './colleague-card';
import { fetchData } from './extras';
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  async componentDidMount() {
    const json = await fetchData();
    this.setState({ data: json });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>The fellowship of tretton37</h2>
        </header>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {this.state.data.map(colleague => (
              <Grid item xs={12} sm={6} md={4} lg={3}>
                  <ColleagueCard colleague={colleague} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    );
  }
}
