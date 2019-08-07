import {takeEvery,put} from 'redux-saga/effects'
import * as types from '../constants/ActionTypes'



function* watchUser(){
    yield takeEvery(types.ADD_USER,workerUser)
}

function* workerUser(action){
    try{
      
       let success=false;
       const username=action.payload;
       const Chatkit = require("@pusher/chatkit-server");
       const chatkit = new Chatkit.default({
       instanceLocator: "v1:us1:fc78309a-4f98-461a-be6d-551905e31354",
       key: "baee1676-fc56-4e38-8ca8-614e29f3efb2:Ei4PlhLQZCoN+3PYHadw13feHSBA+nL24HqhvP+Q3Zk="
   })

   yield chatkit.createUser({
                   id: username,
                   name: username,
               })
               .then((currentUser) => {
               success=true
               }).catch((err) => {
                        if(err.status === 400) {
                           
                    success=true
                   } else {
                       console.log(err.status);
                   }
               });    
               if(success) yield put ({type:types.USER_CREATED, payload:username})
               console.log(success)
    }
    catch(e){
     console.log(e)
    }
 
}

export default watchUser