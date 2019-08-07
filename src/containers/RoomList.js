import RoomListComponent from '../components/RoomList'
import {connect} from 'react-redux'
import {joinRoom,getMessages} from '../actions/Index'

const mapStateProps=state=> ({
  rooms:state.rooms.joinableRooms,
  user:state.user.userProporties
})

const mapDispatchProps=(dispatch)=>({
    dispatch:(room)=>{
         console.log(room)
        dispatch(joinRoom(room))
    },
    subscribe:(roomId,user)=>{
      dispatch(joinRoom(roomId))
   


     user.subscribeToRoom({
        roomId:roomId,
        messageLimit: 100,
        hooks: {
         onMessage:(message)=>  {    
            const message1=[message.senderId, message.text]
            dispatch(getMessages((message1)))
          
         },
     }
    })
    }

})



export const RoomList=connect(mapStateProps,mapDispatchProps)(RoomListComponent)