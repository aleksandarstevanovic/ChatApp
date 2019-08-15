import MessageListComponent from '../components/MessageList'
import {connect} from 'react-redux'
import {getMessages} from '../actions/Index'


const mapDispatchProps=(roomId,dispatch)=>({
    dispatch:()=>{
        dispatch(getMessages(roomId))
    }
})

const mapStateToProps=state=>({
    messages:state.messages.messagess,
    currentRoom:state.rooms.currentRoomId,
    currentUser:state.user.currentUser,
    
})



export const MessageList=connect(mapStateToProps,mapDispatchProps)(MessageListComponent)

