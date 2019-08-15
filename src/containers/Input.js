import {connect} from 'react-redux'
import InputComponent from '../components/Input'
import {sendMessage} from '../actions/Index'

const mapDispatchProps=dispatch=>({
    dispatch:(e)=>{dispatch(sendMessage(e.target[0].value))
        
    e.preventDefault()
    }
})
const mapStateToProps=state=>({
    currentRoom:state.rooms.currentRoomId
})

export const  Input=connect(mapStateToProps,mapDispatchProps) (InputComponent)
