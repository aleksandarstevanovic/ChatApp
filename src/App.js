 import React, { Component } from 'react';
 import Signup from './Components/Signup';
 import ChatApp from './Components/ChatApp';
 import RoomList from './Components/RoomList';


 const Chatkit = require("@pusher/chatkit-server");
 const chatkit = new Chatkit.default({
     instanceLocator: "v1:us1:80da3bcd-d4e3-46e8-93e7-c42957efd993",
     key: "188a2026-3224-4f8b-b87c-22d477a884d2:KcRK0XLchyoP2SwhwFgIyHy6ETJz48OGESBT0NGIp/M="
   })



   class App extends Component {
           constructor(props) {
               super(props);
               this.state = {
                   currentUsername: '',
                   currentId: '',
                   currentView: 'signup'
               }
               this.changeView = this.changeView.bind(this);
               this.createUser = this.createUser.bind(this);
           }

           createUser(username) {
               chatkit.createUser({
                   id: username,
                   name: username,
               })
               .then((currentUser) => {
                   this.setState({
                       currentUsername: username,
                       currentId: username,
                       currentView: 'chatApp'
                   })
               }).catch((err) => {
                        if(err.status === 400) {
                       this.setState({
                           currentUsername: username,
                           currentId: username,
                           currentView: 'chatApp'
                       })
                   } else {
                       console.log(err.status);
                   }
               });
           }

         changeView(view) {
             this.setState({
                 currentView: view
             })
         }

         render() {
           let view ='';
           if (this.state.currentView === "signup") {
               view = <Signup onSubmit={this.createUser}/>
           } else if (this.state.currentView === "chatApp") {
               view = <ChatApp currentId={this.state.currentId} />
           }
           return (
               <div className="App">
                   {view}

               </div>
           );
       }
       }
       export default App;
