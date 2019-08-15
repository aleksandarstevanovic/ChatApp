import React from 'react';
import PropTypes from 'prop-types'


  const RoomList=props=>{ 
         
          return(
            <div className='room-list'>
            <ul>
            <h2>ROOMS:</h2>
            <hr/>
           
            {props.rooms.map(room=>{
              const active=props.currentRoomId===room.id ? 'active':'';
              
              return(
                <li key={room.id} className={'room ' + active}>
                 <a href="/#" onClick={()=>props.subscribe(room.id,room.name,props.user)}
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
   currentRoomId:PropTypes.string,
   user:PropTypes.object,
   subscribe:PropTypes.func.isRequired
  }
  export default RoomList;
