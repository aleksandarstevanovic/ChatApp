import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

  class MessageList extends Component {
 componentDidUpdate(){
   const node=ReactDOM.findDOMNode(this)
   node.scrollTop=node.scrollHeight
 }

      render() {
        console.log(this.props.currentUser)
        if(!this.props.currentRoom){
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
                          <p className="message-sender">{message[0]}</p>
                          <p className={this.props.currentUser===message[0]? 'sent-messages':'received-messages'}>{message[1]}</p>
                      </li>
                  ))}
                  <li></li>
              </ul>

          )
      }
    }
  }

  MessageList.propTypes={
    currentRoom:PropTypes.string,
    currentUser:PropTypes.string,
    messages:PropTypes.array
  }
  export default MessageList;
