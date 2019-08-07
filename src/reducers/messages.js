import * as types from '../constants/ActionTypes'

const initialState={
    
  messagess:[],
  
}

const message=(state=initialState,action)=>{
   console.log(action.payload)
    switch(action.type){
        case types.MESSAGE_SENT:
            return Object.assign({},state,{
              
                messagess:state.messagess.concat([action.payload])
            });
       
        case types.CLEAR_MESSAGES:
            return Object.assign({},state,{
              
                messagess:[]
            });
            default:
                return state;
    }
}
export default message