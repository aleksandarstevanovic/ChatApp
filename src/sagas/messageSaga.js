import {takeEvery,select} from 'redux-saga/effects'
import * as types from '../constants/ActionTypes'



function* watchMessage(){
    yield takeEvery(types.SEND_MESSAGE,workerMessage)
}

function* workerMessage(action){
    try{
  
        const text=action.payload
        
         const getProporties=state=>state.user.userProporties
        const user=yield select(getProporties)

        const getCurrentRoom=state=>state.rooms.currentRoomId
        const currentRoom=yield select(getCurrentRoom)
       
        user.sendMessage({
            text,
            roomId:currentRoom
        })
       
    }
    catch(e){
     console.log(e)
    }
 
}

export default watchMessage