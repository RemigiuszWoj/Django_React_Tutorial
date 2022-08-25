import React, { Component } from "react";
import {Button, Grid, Typography } from "@mui/material";
import CreateRoomPage from "./CreateRoomPage";

export default class Room extends Component {
    constructor(props) {
        super(props);
        this.state = {
            voteToSkip: 2,
            guestCanPasuse: false,
            isHost: false,
            showSet: false,
        };

        this.roomCode = this.props.match.params.roomCode;
        this.getRoomDetail();
        this.leavButtonPressed = this.leavButtonPressed.bind(this);
        this.updateShowSettings = this.updateShowSettings.bind(this);
        this.renderSettingsButton = this.renderSettingsButton.bind(this);
        this.renderSettings = this.renderSettings.bind(this);    
    }

    getRoomDetail() {
        fetch('/api/get-room' + '?code=' + this.roomCode)
            .then((response) => {
                if (!response.ok) {
                    this.props.leaveRoomCallback();
                    this.props.history.push("/");
                }
                return response.json();
            })
            .then((data) => {
                this.setState({
                voteToSkip: data.votes_to_skip,
                guestCanPasuse: data.guest_can_pause,
                isHost: data.is_host,
            });
        });
    }

    leavButtonPressed() {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
        };
        fetch("/api/leave-room", requestOptions)
            .then((_response) =>{
                this.props.leaveRoomCallback();
                this.props.history.push("/");
            });
    }

    updateShowSettings(value) {
        this.setState({
            showSettings: value,
        });
    }

    renderSettings() {
        return (
          <Grid container spacing={1}>
            <Grid item xs={12} align="center">
              <CreateRoomPage
                update={true}
                votesToSkip={this.state.votesToSkip}
                guestCanPause={this.state.guestCanPause}
                roomCode={this.roomCode}
                updateCallback={this.getRoomDetails}
              />
            </Grid>
            <Grid item xs={12} align="center">
              <Button
                variant="contained"
                color="secondary"
                onClick={() => {}}
              >
                Close
              </Button>
            </Grid>
          </Grid>
        );
      }
    
      renderSettingsButton() {
        return (
          <Grid item xs={12} align="center">
            <Button
              variant="contained"
              color="primary"
              onClick={() => this.updateShowSettings(true)}
            >
              Settings
            </Button>
          </Grid>
        );
      }
    

    render() {
        if (this.state.showSettings) {
            return this.renderSettings();
        }
        return  (
            <Grid container spacing={1}>
                <Grid item xs={12} align="center">
                    <Typography variant="h4" component={"h4"}>
                        Code: {this.roomCode}
                    </Typography>
                </Grid>
                <Grid item xs={12} align="center">
                    <Typography variant="h6" component={"h6"}>
                        Votes: {this.state.voteToSkip}
                    </Typography>
                </Grid>
                <Grid item xs={12} align="center">
                    <Typography variant="h6" component={"h6"}>
                        Guest Can Pause: {this.state.guestCanPasuse.toString()}
                    </Typography>
                </Grid>
                <Grid item xs={12} align="center">
                    <Typography variant="h6" component={"h6"}>
                        Host: {this.state.isHost.toString()}
                    </Typography>
                </Grid>
                {this.state.isHost ? this.renderSettingsButton() : null}
                <Grid item xs={12} align="center">
                    <Button variant="contained" color="secondary" onClick={ this.leavButtonPressed }>
                        Leav Room
                    </Button>
                </Grid>
            </Grid>
            
        );
    }
}