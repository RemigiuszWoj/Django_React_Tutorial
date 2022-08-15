import React, { Component } from "react";
import { useParams } from "react-router-dom";


export default class Room extends Component {
    constructor(props) {
        super(props);
        this.state = {
            voteToSkip: 2,
            guestCanPasuse: false,
            isHost: false,
        };
        // this.roomCode = this.props.match.params.roomCode;
        const { roomCode } = useParams();
    }


    render() {
        return  (
            <div>
                <h3>{this.roomCode}</h3>
                <p>Votes: {this.state.voteToSkip}</p>
                <p>Guest Can Pause: {this.state.guestCanPasuse}</p>
                <p>Host: {this.state.isHost}</p>
            </div>
        );
    }
}