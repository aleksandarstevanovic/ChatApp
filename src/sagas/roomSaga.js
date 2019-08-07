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
       instanceLocator: "v1:us1:fc78309a-4f98-461a-be6d-551905e31354",
       key: "baee1676-fc56-4e38-8ca8-614e29f3efb2:Ei4PlhLQZCoN+3PYHadw13feHSBA+nL24HqhvP+Q3Zk="
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