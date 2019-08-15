import * as types from '../constants/ActionTypes'

const initialState={
    currentRoomId: null,
    currentRoomName:'',
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
                currentRoomId:action.payload.roomId,
                currentRoomName:action.payload.roomName
            })
            default:
                return state;
    }
}

export default rooms;