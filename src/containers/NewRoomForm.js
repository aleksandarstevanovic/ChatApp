import NewRoomFormComponent from '../components/NewRoomForm'
import {connect} from 'react-redux'
import {createRoom} from '../actions/Index'

const mapDispatchProps=dispatch=>({
    handleSubmit:(e)=>{
        console.log(e)
        dispatch(createRoom(e.target[0].value))
        
        e.preventDefault()
    },
    
})

export const NewRoomForm=connect(null,mapDispatchProps) (NewRoomFormComponent)
