import {combineReducers} from 'redux'
import messages from './messages'
import user from './user'
import rooms from './rooms'


const reducers=combineReducers({
     messages,
     user,
     rooms
})

export default reducers;