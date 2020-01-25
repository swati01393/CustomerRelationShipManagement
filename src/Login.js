import React from 'react';
import './App.css';
import { Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: 300,
        },
    },
}));

export default function BasicTextFields() {
    const classes = useStyles();
        onSubmit = () => {
        if (userFound) {
            return <Redirect to="/posts/" />
        }
    }

    
        return (
            <div className="wrap">

                <div>
                    <h1>Logo</h1>
                </div>
                <div>
                    <h1> PowerControl</h1>

                    <h3> Welcome to Power Control Cloud!</h3><hr></hr>
                    <p>Access to your power system anytime , anywhere</p>
                    <p>The user friendly intefac provides you acaess with real-time monitoring and control
                        of your power system so you that can make the right decision, right away-thus minimizing downtime
                  and maximizing power system performance</p>
                    <h2>Log In to Power Control Cloud </h2><hr></hr>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField id="outlined-basic" label="Username" variant="outlined" />
                        <br />
                        <TextField id="outlined-basic" label="Password" variant="outlined" />
                        <br />
                        <button onClick={this.onSubmit}>Login</button>

                    </form>
                </div>

            </div>
        )
    }

