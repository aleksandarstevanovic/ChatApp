     import React, {Component} from 'react';
     import { ChatManager, TokenProvider } from '@pusher/chatkit-client';
     import {MessageList} from '../containers/MessageList';
     import {RoomHeader} from '../containers/RoomHeader';
     import {Input} from '../containers/Input';
     import {RoomList} from '../containers/RoomList';
     import {NewRoomForm} from '../containers/NewRoomForm';
     import {UserHeader} from '../containers/UserHeader'
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
           
           const chatManager = new ChatManager({
            instanceLocator: "v1:us1:a424e95a-3dd1-4577-bf41-581ed7120785",
            userId: this.props.currentUser,
            tokenProvider: new TokenProvider({
                url: "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/a424e95a-3dd1-4577-bf41-581ed7120785/token"
            })
        })
            chatManager
                .connect()
                .then(currentUser => {
                  
                  this.props.connectUser(currentUser)
                 
                       this.props.dispatch()     
                  })

                .catch(error => console.log(error))
              }
        render() {
            return (
              <div className='chat-app'>
                   <RoomList/>
                   <NewRoomForm />
                   <UserHeader/>
                   <RoomHeader/>
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
