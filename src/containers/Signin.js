import {connect} from 'react-redux'
import SigninComponent from '../components/Signup'
import {addUser} from '../actions/Index'

const mapDispatchProps=(dispatch)=>({
 
handleSubmit:(e,input)=>{  
   e.preventDefault()
   dispatch(addUser(input.value))
}
})

export const Signin=connect(()=>({}),mapDispatchProps)(SigninComponent)