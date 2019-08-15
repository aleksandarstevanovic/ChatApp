import {takeEvery,put} from 'redux-saga/effects'
import * as types from '../constants/ActionTypes'

function* watchRoom(){
    yield takeEvery(types.GET_ROOMS,workerRoom)
}

function* workerRoom(action){
    try{
       let roomsList
       const Chatkit = require("@pusher/chatkit-server");
       const chatkit = new Chatkit.default({
        instanceLocator: "v1:us1:a424e95a-3dd1-4577-bf41-581ed7120785",
        key: "8a5a334a-de88-46ac-9efd-7230b4fb38b0:JiFCebLQ2pofO6+fMpuMHEPYoRy4ZUcH/1vNOsnZqwo="
   })

   yield chatkit.getRooms({})
   .then(rooms => roomsList=rooms)
   .catch(err => console.error(err))

     
     if(roomsList) yield put ({type:types.ROOM_LIST, payload:roomsList})
               
    }
    catch(e){
     console.log(e)
    }
 
}

export default watchRoom