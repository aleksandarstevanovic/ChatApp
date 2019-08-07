import React from 'react';
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(0),
    marginRight: theme.spacing(1),
  },
}));

 const NewRoomForm=props=> {
       let input
       const classes=useStyles();
      return(
      <form onSubmit={(e)=> { return props.handleSubmit(e),input.value=''}} className="new-room-form">
      <TextField
       id="room"
        label="Create room"
        className={classes.textField}
        type="text"
        autoComplete="off"
        margin="normal"
        fullWidth
        inputRef={node => {
            input = node;
          }}
      />
                <button className="submit room-button"></button>
                </form>
          )
      
  }
  NewRoomForm.propTypes={
        handleSubmit:PropTypes.func.isRequired
  }
  export default NewRoomForm;
