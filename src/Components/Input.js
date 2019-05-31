import React, {Component} from 'react';


 class Input extends Component {
     constructor(props) {
         super(props);
         this.state = {
             message: ""
         }
         this.handleChange = this.handleChange.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
     }
     handleChange(e) {
         this.setState({
             message: e.target.value
         })
     }
     handleSubmit(e) {
         e.preventDefault();
         this.props.onSubmit(this.state.message);
         this.setState({
             message: ''
         })
     }
     render() {
         return (
             <form onSubmit={this.handleSubmit} className="input-field">

                 <input disabled={this.props.disabled} className="message-input" type="text"
                 onChange={this.handleChange}
                 value={this.state.message}
                 placeholder='Type a message...'
                 />
                 <button className="submit send-button" disabled={this.props.disabled}></button>


             </form>
         )
     }
 }
 export default Input;
