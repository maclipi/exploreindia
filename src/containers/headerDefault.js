import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import SearchAppBar from '../components/header';
import GridListTile from '@material-ui/core/GridListTile';
import Paper from '@material-ui/core/Paper';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const tileData = [
       {
         img: 'https://material-ui.com/static/images/grid-list/breakfast.jpg',
         title: 'Image',
         author: 'author',
         cols: 1,
       },
       {
        img: 'https://material-ui.com/static/images/grid-list/breakfast.jpg',
        title: 'Image',
        author: 'author',
        cols: 1,
       },
       {
        img: 'https://material-ui.com/static/images/grid-list/breakfast.jpg',
        title: 'Image',
        author: 'author',
        cols: 1,
       },
       {
        img: 'https://material-ui.com/static/images/grid-list/breakfast.jpg',
        title: 'Image',
        author: 'author',
        cols: 1,
       },
       {
        img: 'https://material-ui.com/static/images/grid-list/breakfast.jpg',
        title: 'Image',
        author: 'author',
        cols: 1,
       },
       {
        img: 'https://material-ui.com/static/images/grid-list/breakfast.jpg',
        title: 'Image',
        author: 'author',
        cols: 1,
       },
       {
        img: 'https://material-ui.com/static/images/grid-list/breakfast.jpg',
        title: 'Image',
        author: 'author',
        cols: 1,
       },
       {
        img: 'https://material-ui.com/static/images/grid-list/breakfast.jpg',
        title: 'Image',
        author: 'author',
        cols: 1,
       },
       {
        img: 'https://material-ui.com/static/images/grid-list/breakfast.jpg',
        title: 'Image',
        author: 'author',
        cols: 1,
       },
       {
        img: 'https://material-ui.com/static/images/grid-list/breakfast.jpg',
        title: 'Image',
        author: 'author',
        cols: 1,
       },
       {
        img: 'https://material-ui.com/static/images/grid-list/breakfast.jpg',
        title: 'Image',
        author: 'author',
        cols: 1,
       },
       {
        img: 'https://material-ui.com/static/images/grid-list/breakfast.jpg',
        title: 'Image',
        author: 'author',
        cols: 1,
       },
       {
        img: 'https://material-ui.com/static/images/grid-list/breakfast.jpg',
        title: 'Image',
        author: 'author',
        cols: 1,
       },
       {
        img: 'https://material-ui.com/static/images/grid-list/breakfast.jpg',
        title: 'Image',
        author: 'author',
        cols: 1,
       },
       {
        img: 'https://material-ui.com/static/images/grid-list/breakfast.jpg',
        title: 'Image',
        author: 'author',
        cols: 1,
       },
       {
        img: 'https://material-ui.com/static/images/grid-list/breakfast.jpg',
        title: 'Image',
        author: 'author',
        cols: 1,
       },
       {
        img: 'https://material-ui.com/static/images/grid-list/breakfast.jpg',
        title: 'Image',
        author: 'author',
        cols: 1,
       },
       {
        img: 'https://material-ui.com/static/images/grid-list/breakfast.jpg',
        title: 'Image',
        author: 'author',
        cols: 1,
       },
       {
        img: 'https://material-ui.com/static/images/grid-list/breakfast.jpg',
        title: 'Image',
        author: 'author',
        cols: 1,
       },
       {
        img: 'https://material-ui.com/static/images/grid-list/breakfast.jpg',
        title: 'Image',
        author: 'author',
        cols: 1,
       },
       {
        img: 'https://material-ui.com/static/images/grid-list/breakfast.jpg',
        title: 'Image',
        author: 'author',
        cols: 1,
       },

     ];
     const styles = theme => ({
        root: {
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          overflow: 'hidden',
          backgroundColor: theme.palette.background.paper,
        },
        gridList: {
          width: 500,
          height: 450,
        },icon: {
            color: 'rgba(255, 255, 255, 0.54)',
          },
      });
class HeaderDefault extends Component {

    
    render(){
        return(
            <div className={styles.root}>
            <SearchAppBar />
            <GridList cellHeight={160}  style={{marginTop:'100px'}} className={styles.gridList} cols={4}>
            
            {tileData.map(tile => (
              <GridListTile key={tile.img} cols={tile.cols || 1}>
                <img src={tile.img} alt={tile.title} />
                <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton className={styles.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
              </GridListTile>
            ))}
          </GridList>
          </div>
            
              
        )
    }
        
    

}

export default HeaderDefault;