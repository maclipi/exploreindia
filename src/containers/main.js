import React, { Component } from 'react';
import SearchBar from '../components/search'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import mainlogo from '../pics/main-logo.svg'




class Main extends Component {
  
  render() {
    return (
      <Grid container  className="searchClass"
      direction="row"
      justify="center"
      alignItems="center" spacing={20}>
      <Grid item xs={8}>
      < img  src={mainlogo}  alt="main-logo" style={{width:'250 px', height:'250px'}} />
      <SearchBar   />
      </Grid>
      <Grid item xs={8}>
      <Button variant="contained" color="secondary" style={{height:'40px'}} >
        search & explore
      </Button>
      </Grid>
      </Grid>
    );
  }
}

export default Main;