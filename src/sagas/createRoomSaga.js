import {takeEvery,put,select} from 'redux-saga/effects'
import * as types from '../constants/ActionTypes'



function* watchCreateRoom(){
    yield takeEvery(types.CREATE_ROOM,workerCreateRoom)
}

function* workerCreateRoom(action){
    try{
        
    const getProporties=state=>state.user.userProporties
      const user=yield select(getProporties)
        let success=false;
        const name=action.payload
        
       
           if(name.length>0){
            yield user.createRoom({          
            name
            })
            .then(success=true)
            .catch(err=>console.log(err))
    }

    if(success){
        yield put ({type:types.GET_ROOMS})
       
        
    }
}
    catch(e){
     console.log(e)
    }
 
}

export default watchCreateRoom