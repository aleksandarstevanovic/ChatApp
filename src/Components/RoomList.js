import React from 'react';
import PropTypes from 'prop-types'


  const RoomList=props=>{ 
          return(
            <div className='room-list'>
            <ul>
            <h2>ROOMS:</h2>
            <hr/>
           
            {props.rooms.map(room=>{
              const active=props.currentRoom===room.id ? 'active':'';

              return(
                <li key={room.id} className={'room ' + active}>
                 <a href="/#" onClick={()=>props.subscribe(room.id,props.user)}
                 >#{room.name}</a>
                </li>
              )
            }

            )}
             
            </ul>
         
            </div>
          )
      }

  RoomList.propTypes={
   rooms:PropTypes.array,
   currentRoom:PropTypes.string,
   user:PropTypes.object,
   subscribe:PropTypes.func.isRequired
  }
  export default RoomList;
