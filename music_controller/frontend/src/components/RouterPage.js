import React, { Component } from "react";
import HomePage from "./HomePage";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import Room from "./Room";
// import {
//     BrowserRouter as Router,
//     Routes,
//     Route,
//     Link
//   } from "react-router-dom";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
  } from "react-router-dom";
// import { useParams } from "react-router-dom";


// function GetId() {
//     let { roomCode } = useParams();
//     return <div>Siema {roomCode}</div>;
//   }
export default class RouterPage extends Component {
    constructor(props) {
        super(props);
    }


//     render() {
//         return (
//             <Router>
//                 <Routes>
//                     <Route path="/" element={<HomePage />} />
//                     <Route path="/join" element={<RoomJoinPage />} />
//                     <Route path="/create" element={<CreateRoomPage />} />
//                     {/* <Route path="/room/:roomCode" element={(props) => <Room {...props}/>} /> */}
//                     <Route path="/room/:roomCode" element={<Room />} />
                        
//                 </Routes>
//             </Router>
//         );  
//     }
// }

render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <p>This is the home page</p>
          </Route>
          <Route path="/join" component={RoomJoinPage} />
          <Route path="/create" component={CreateRoomPage} />
          <Route path="/room/:roomCode" component={Room} />
        </Switch>
      </Router>
    );
  }
}