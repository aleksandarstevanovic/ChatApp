
    import React, {Component} from 'react';
    import send from '../icons/send-button.png'



    class  Signup extends Component {
        constructor(props) {
            super(props);
            this.state = {
                username: "",
            }
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }
        handleChange(e) {
            this.setState({username: e.target.value});
        }
        handleSubmit(e) {
            e.preventDefault()
            this.props.onSubmit(this.state.username);
        }
        render() {
            return(
                <div className="form-container">

                    <h1>Sign in</h1>
                    <form onSubmit={this.handleSubmit} className="form">

                        <input type="text" name="username" onChange={this.handleChange} placeholder='Enter username' className="input" />
                        <button className="submit sing-in-button">Sign in</button>
                    </form>
                </div>
            )
        }
    }
    export default Signup;
