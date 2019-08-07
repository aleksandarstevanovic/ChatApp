import * as types from '../constants/ActionTypes'

export const addUser=user=>({
    type:types.ADD_USER,
    payload:user
})


export const getRooms=()=>({
type:types.GET_ROOMS
})

export const roomList=(rooms)=>({
    type:types.ROOM_LIST,
    payload:rooms
})

export const sendMessage=message=>({
 type:types.SEND_MESSAGE,
 payload:message
})

export const createRoom=room=>({
    type:types.CREATE_ROOM,
    payload:room
})

export const joinRoom=roomId=>({
    type:types.JOIN_ROOM,
    payload:roomId
})

export  const getMessages=message=>({
type:types.GET_MESSAGES,
payload:message
})

export const userCreated=user=>({
    type:types.USER_CREATED,
    payload:user
})

export const enterRoom=roomId=>({
    type:types.ENTER_ROOM,
    payload:roomId
})

export const userProporties=proporties=>({
    type:types.USER_PROPORTIES,
    payload:proporties
})