import RoomHeaderComponent from '../components/RoomHeader'
import {connect} from 'react-redux'



const mapStateToProps=state=>({  
    currentRoom:state.rooms.currentRoomName,  
})



export const RoomHeader=connect(mapStateToProps)(RoomHeaderComponent)

