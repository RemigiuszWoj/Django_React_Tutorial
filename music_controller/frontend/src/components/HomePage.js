import React, { Component } from "react";
import { TextField, Button,ButtonGroup, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";


export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    async componentDidMount() {
        fetch('/api/user-in-room')
        .then((response) => response.json())
        .then((data) => {});
    }

    render() {
        return (
        <Grid container spacing={3}>
            <Grid item xs={12} align="center">
                <Typography variant="h3" compact="h3">
                    House Party 
                </Typography>
            </Grid>
            <Grid item xs={12} align="center">
                <ButtonGroup disableElevation variant="contained" color="primary">
                    <Button color="primary" to="/join" component={ Link }>
                        Join a Room
                    </Button>
                    <Button color="secondary" to="/create" component={ Link }>
                        Create a Room
                    </Button>
                </ButtonGroup>
            </Grid>
        </Grid>
        );
    }

}