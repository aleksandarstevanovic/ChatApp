import {connect} from 'react-redux'
import InputComponent from '../components/Input'
import {sendMessage} from '../actions/Index'

const mapDispatchProps=(dispatch)=>({
    dispatch:(e)=>{dispatch(sendMessage(e.target[0].value))
        
    e.preventDefault()
    }
})

export const  Input=connect(null,mapDispatchProps) (InputComponent)
