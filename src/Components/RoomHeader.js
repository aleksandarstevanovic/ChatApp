import React from 'react';
import PropTypes from 'prop-types'


  const Room=props=>{ 
          return(
            <div className='current-room'>
            <h1 className='room-name'>{props.currentRoom?`#${props.currentRoom}`:''}</h1>   
            </div>
          )
      }

  Room.propTypes={
   currentRoom:PropTypes.string,
  }
  export default Room;
