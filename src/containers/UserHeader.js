import UserComponent from '../components/UserHeader'
import {connect} from 'react-redux'


const mapStateToProps=state=>({  
    currentUser:state.user.currentUser,
   
})


export const UserHeader=connect(mapStateToProps)(UserComponent)

