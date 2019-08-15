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
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
     
    },
  }));

 const Input=props=> {
    const classes = useStyles()
    let input 
        return (
        <form onSubmit={(e)=>{return  props.dispatch(e),input.value=''}} className="input-field">
        <TextField
        disabled={props.currentRoom? false:true}
        id="message"
        label="Type a Message"
        className={classes.textField}
        type="text"
        autoComplete="off"
        margin="normal"
        fullWidth
        inputRef={node => {
          input = node;
        }}
        
      />
      <button className="submit send-button" disabled={props.currentRoom? false:true} ></button>
             </form>
         )
 }

 Input.propTypes={
    dispatch:PropTypes.func.isRequired, 
    currentRoom:PropTypes.string
 }
 export default Input;
