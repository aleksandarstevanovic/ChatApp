import * as types from '../constants/ActionTypes'

const initialState={
    currentRoom: null,
    joinableRooms:[],
    joinedRooms:[]
}

const rooms=(state=initialState,action)=>{
   
    switch(action.type){
        
        case types.ROOM_LIST:
            
            return Object.assign({},state,{
                joinableRooms:action.payload
              
            });
        case types.ENTER_ROOM:
            return Object.assign({},state,{
                currentRoom:action.payload
            })
            default:
                return state;
    }
}

export default rooms;