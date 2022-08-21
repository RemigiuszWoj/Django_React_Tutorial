import React, { Component } from "react";
// import { useParams } from "react-router-dom";


export default class Room extends Component {
    constructor(props) {
        super(props);
        this.state = {
            voteToSkip: 2,
            guestCanPasuse: false,
            isHost: false,

        };

        this.roomCode = this.props.match.params.roomCode;
        this.getRoomDetail();

    }

    getRoomDetail() {
        fetch('/api/get-room' + '?code=' + this.roomCode)
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                voteToSkip: data.votes_to_skip,
                guestCanPasuse: data.guest_can_pause,
                isHost: data.is_host,
            });
        });
    }


    render() {

        return  (
            <div>
                <p>roomCode: {this.roomCode}</p>
                <p>Votes: {this.state.voteToSkip}</p>
                <p>Guest Can Pause: {this.state.guestCanPasuse.toString()}</p>
                <p>Host: {this.state.isHost.toString()}</p>
            </div>
        );
    }
}
