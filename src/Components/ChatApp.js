import React, {Component} from 'react';
    import { ChatManager, TokenProvider } from '@pusher/chatkit-client';
     import MessageList from './MessageList';
    import Input from './Input';
     import RoomList from './RoomList';
     import NewRoomForm from './NewRoomForm';

    class ChatApp extends Component {
        constructor(props) {
            super(props);
            this.state = {
                currentUser: null,
                currentRoom: null,
                messages: [],
                users: [],
                joinableRooms:[],
                joinedRooms:[]
            }
            this.addMessage = this.addMessage.bind(this);
            this.subscribeToRoom=this.subscribeToRoom.bind(this);
            this.getRooms=this.getRooms.bind(this);
            this.createRoom=this.createRoom.bind(this);
        }

      componentDidMount() {
            const chatManager = new ChatManager({
                instanceLocator: "v1:us1:80da3bcd-d4e3-46e8-93e7-c42957efd993",
                userId: this.props.currentId,
                tokenProvider: new TokenProvider({
                    url: "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/80da3bcd-d4e3-46e8-93e7-c42957efd993/token"
                })
            })

            chatManager
                .connect()
                .then(currentUser => {

                    this.setState({ currentUser: currentUser })
                  this.getRooms()

                  })


                .catch(error => console.log(error))
              }



          addMessage(text) {
          this.state.currentUser.sendMessage({
              text,
              roomId: this.state.currentRoom
          })
          .catch(error => console.error('error', error));
      }


      getRooms(){
        this.state.currentUser.getJoinableRooms()
        .then(joinableRooms=>{
          this.setState({
            joinableRooms,
            joinedRooms:this.state.currentUser.rooms,

          })
        }).catch(err=>console.log(err))
      }

      subscribeToRoom(roomId){
        this.setState({messages:[]})
        return   this.state.currentUser.subscribeToRoom({
            roomId: roomId,
            messageLimit: 100,
            hooks: {
                onMessage: message => {
                    this.setState({
                        messages: [...this.state.messages, message],
                        currentRoom:roomId
                    })
                },
            }
        })
      }

      createRoom(name){

        if(name.length>0){
      this.state.currentUser.createRoom({

        name
      })
      .then((room)=>{this.subscribeToRoom(room.id);this.getRooms();this.setState({currentRoom:room.id})})
      .catch(err=>console.log(err))
      }
    }

        render() {
            
            return (
              <div className='proba'>


                   <RoomList
                    roomId={this.state.currentRoom}
                    subscribeToRoom={this.subscribeToRoom}
                    rooms={[...this.state.joinableRooms,...this.state.joinedRooms]}/>
                    <NewRoomForm createRoom={this.createRoom}/>

                   <MessageList  currentUser={this.state.currentUser} roomId={this.state.currentRoom} messages={this.state.messages} />
                   <Input disabled={!this.state.currentRoom} className="input-field" onSubmit={this.addMessage} />

               </div>
            )
        }
    }




   export default ChatApp;
