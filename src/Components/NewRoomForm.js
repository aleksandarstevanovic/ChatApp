import React, {Component} from 'react';


  class NewRoomForm extends Component {
  constructor(){
    super()
    this.state={
      roomName:''
    }
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }


  handleChange(e){
    this.setState({
      roomName:e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.createRoom(this.state.roomName)
    this.setState({roomName:''})
  }

      render() {
          return(

                <form onSubmit={this.handleSubmit} className="new-room-form">
                <input
                className='room-input'
                value={this.state.roomName}
                onChange={this.handleChange}
                type='text' placeholder='Create a room'/>
                <button className="submit room-button"></button>
                </form>

              
          )
      }
  }
  export default NewRoomForm;
