     import React, {Component} from 'react';
     import { ChatManager, TokenProvider } from '@pusher/chatkit-client';
     import {MessageList} from '../containers/MessageList';
     import {Input} from '../containers/Input';
     import {RoomList} from '../containers/RoomList';
     import {NewRoomForm} from '../containers/NewRoomForm';
     import {getRooms,userProporties} from '../actions/Index'
     import {connect} from 'react-redux'
     import PropTypes from 'prop-types'

     const mapStateToProps=state=>({
       currentUser:state.user.currentUser,
       proporties:state.user.userProporties
     })
     
     const mapDispatchToProps=dispatch=>({
       dispatch:()=>{
         dispatch(getRooms())
       },
       connectUser:(proporties)=>{
         dispatch(userProporties(proporties))
       }
     })
    
    class ChatApp extends Component {
        

      componentDidMount() {
           console.log(this.props.currentUser)
            const chatManager = new ChatManager({
                instanceLocator: "v1:us1:fc78309a-4f98-461a-be6d-551905e31354",
                userId: this.props.currentUser,
                tokenProvider: new TokenProvider({
                    url: "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/fc78309a-4f98-461a-be6d-551905e31354/token"
                })
            })

            chatManager
                .connect()
                .then(currentUser => {
                  console.log("Connected as user ", currentUser);
                  this.props.connectUser(currentUser)
                  console.log(currentUser)
                       this.props.dispatch()     
                  })

                .catch(error => console.log(error))
              }


        render() {
            return (
              <div className='chat-app'>
                   <RoomList/>
                   <NewRoomForm />
                   <MessageList/>
                   <Input />
               </div>
            )
        }
    }
    ChatApp.propTypes={
      currentUser:PropTypes.string,
      proporties:PropTypes.object,
      dispatch:PropTypes.func.isRequired,
      connectUser:PropTypes.func.isRequired
    }

   export default connect (mapStateToProps,mapDispatchToProps)(ChatApp);
