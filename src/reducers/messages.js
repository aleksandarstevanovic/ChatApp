import * as types from '../constants/ActionTypes'

const initialState={
  messages:[],
}
const message=(state=initialState,action)=>{
   
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