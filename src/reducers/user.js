import * as types from '../constants/ActionTypes'

const initialState={
    currentUser: '',
    currentId: '',
    userProporties:null,
    users: []
   
    
}

const user=(state=initialState,action)=>{
    if(action.type===types.USER_CREATED){
        return Object.assign({},state, {
            currentUser:state.currentUser.concat(action.payload),
            currentId:state.currentUser.concat(action.payload)
       
        })
    }
    else if(action.type===types.USER_PROPORTIES){
      
        return Object.assign({},state,{  
         userProporties:action.payload
        
        })
    }
    else {
        return state
    }
   
}

export default user