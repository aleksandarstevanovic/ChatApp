 import React, { Component } from 'react';
 import {Signin} from './containers/Signin';
 import ChatApp from './components/ChatApp';
 import {connect} from "react-redux";

const mapStateToProps=(state)=>{
    return{ 
      user:state.user.currentUser
    }
   
}
   class App extends Component {
    state={
        wiew:false
    }
    componentDidUpdate(prevProps, prevState) {
        const user=this.props.currentUser;
       if (prevProps.wiew!==user){
          
           this.setState({
           wiew:true
       })}
    }
         render() {
         return (
               <div className="App">
                   {!this.props.user ? (<Signin/>) : (<ChatApp/>)}

               </div>
           );
       }
       }
       export default connect(mapStateToProps)(App);
