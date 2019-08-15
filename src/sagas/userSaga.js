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
        instanceLocator: "v1:us1:a424e95a-3dd1-4577-bf41-581ed7120785",
        key: "8a5a334a-de88-46ac-9efd-7230b4fb38b0:JiFCebLQ2pofO6+fMpuMHEPYoRy4ZUcH/1vNOsnZqwo="
   })

   yield chatkit.createUser({
                   id: username,
                   name: username,
                   avatarURL:'http://pixelmator-pro.s3.amazonaws.com/community/avatar_empty@2x.png'              
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
               
     
    }
    catch(e){
     console.log(e)
    }
    
}

export default watchUser