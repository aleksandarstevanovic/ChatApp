import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Scrollbars } from 'react-custom-scrollbars';

  class MessageList extends Component {
 componentDidUpdate(){
   const node=ReactDOM.findDOMNode(this)
   node.scrollTop=node.scrollHeight
 }

      render() {
       
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
                 <Scrollbars
                  style={{ height: '100%' }}          
                  >
                  {this.props.messages.map((message, index) => (
                      <li key={index}>
                          <div className='message'>
                          <img src={`${message[3]}`} className='profile-photo' alt='profile'/>
                          <div className='message-details'>
                          <div className='date-name'>
                          <span className="message-sender">{`${message[0]}`}</span>
                          <span className="message-date">{` ${message[2].slice(11,16)} PM`}</span>
                          </div>
                          <div className='message-text'>
                          <p className='texte'>{message[1]}</p>
                          </div>
                          </div>
                          </div>
                      </li>
                  ))}                    
                  </Scrollbars>
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
