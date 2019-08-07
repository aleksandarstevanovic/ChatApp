import {takeEvery,put} from 'redux-saga/effects'
import * as types from '../constants/ActionTypes'



function* watchSubscribe(){
    yield takeEvery(types.JOIN_ROOM,joinRoom)
    yield takeEvery(types.GET_MESSAGES,getMessages)
}

function* joinRoom(action){
    try{
        yield put ({type:types.CLEAR_MESSAGES})
        const roomId=action.payload   
        if(roomId) yield put ({type:types.ENTER_ROOM, payload:roomId})

    }
    catch(e){
     console.log(e)
    }
 
}

function* getMessages(message){
       console.log(message.payload)
    yield put ({type:types.MESSAGE_SENT,payload:message.payload})
    
   }

export default watchSubscribe