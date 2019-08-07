import {all} from 'redux-saga/effects'
import userSaga from './userSaga'
import roomSaga from './roomSaga'
import messageSaga from './messageSaga'
import createRoomSaga from './createRoomSaga'
import subscribeSaga from './subscribeSaga'


export default function* rootSaga(){
    yield all([
        userSaga(),
        roomSaga(),
        createRoomSaga(),
        subscribeSaga(),
        messageSaga(),
    ])
}