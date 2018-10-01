import React from 'react';
import { Button, TextField, Paper } from '@material-ui/core';
import './YourLikes.css'
export default class YourLikes extends React.Component {

  render() {
    return (
      <div className='yourLikesContainer'>
            <TextField
              autoFocus
              margin="dense"
              id="hobbies"
              label="Hobbies"
            />
            <TextField
              margin="dense"
              id="interests"
              label="Interests"
            />
            <TextField
              margin="dense"
              id="music"
              label="Favourite Music"
            />
            <TextField
              margin="dense"
              id="book"
              label="Favourite Book"
            />
            <TextField
              margin="dense"
              id="favRead"
              label="Favourite Read"
            />
            <TextField
              margin="dense"
              id="dress"
              label="Dress Style"
            />
            <TextField
              margin="dense"
              id="tv"
              label="TV Shows"
            />
            <TextField
              margin="dense"
              id="fMovies"
              label="Favourite Movies"
            />
            <TextField
              margin="dense"
              id="movie"
              label="Movies"
            />
            <TextField
              margin="dense"
              id="sports"
              label="Sports"
            />
            <TextField
              margin="dense"
              id="cuisine"
              label="Cuisine"
            />
            <TextField
              margin="dense"
              id="cook"
              label="Food I Cook"
            />
            <TextField
              margin="dense"
              id="vacation"
              label="Vacation Destination"
            />
            <div style={{backgroundColor:'transparent', marginTop:'1%', marginBottom:'1%'}}>
              <Button style={{backgroundColor:'#c4001d'}}>Save</Button>
              <Button style={{backgroundColor:'#8d6e63'}}>Cancel</Button>
            </div>
            </div>
    );
  }
}