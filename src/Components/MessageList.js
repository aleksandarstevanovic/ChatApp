import React, {Component} from 'react';
import ReactDOM from 'react-dom'

  class MessageList extends Component {



 componentDidUpdate(){
   const node=ReactDOM.findDOMNode(this)
   node.scrollTop=node.scrollHeight
 }

      render() {

        if(!this.props.roomId){
          return(
            <div className='message-list'>
            <div className='join-room'>
            &larr;Join a room!
            </div>
            </div>
          )
        }
        else{

          return(

              <ul className="message-list">
                  {this.props.messages.map((message, index) => (
                      <li key={index}>
                          <p className="message-sender">{message.senderId}</p>
                          <p className={(this.props.currentUser.id===message.senderId )? 'sent-messages':'received-messages'}>{message.text}</p>
                      </li>
                  ))}
                  <li></li>
              </ul>

          )
      }
    }
  }
  export default MessageList;
