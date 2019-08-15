import RoomListComponent from '../components/RoomList'
import {connect} from 'react-redux'
import {joinRoom,getMessages} from '../actions/Index'

const mapStateProps=state=> ({
  rooms:state.rooms.joinableRooms,
  user:state.user.userProporties,
  currentRoomId:state.rooms.currentRoomId
})

const mapDispatchProps=(dispatch)=>({
    dispatch:(room)=>{
      
        dispatch(joinRoom(room))
    },
    subscribe:(roomId,roomName,user)=>{
      dispatch(joinRoom(roomId,roomName))
   


     user.subscribeToRoom({
        roomId:roomId,
        messageLimit: 100,
        hooks: {
         onMessage:(message)=>  {    
           
            const message1=[message.senderId, message.text, message.createdAt,message.sender.avatarURL]
            dispatch(getMessages((message1)))
          
         },
     }
    })
    }

})



export const RoomList=connect(mapStateProps,mapDispatchProps)(RoomListComponent)