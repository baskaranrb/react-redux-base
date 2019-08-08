import React from 'react'
import { Button, TextField, Container, makeStyles, Avatar, Typography, CssBaseline } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  lockAvatar: {
    backgroundColor: theme.palette.secondary.main,
    margin: theme.spacing(1),
  },
  paper: {

    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing(8)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  }
}));

const Login = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="xs">
    <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.lockAvatar}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form>
          <TextField
            label="Username"
            fullWidth
            autoFocus
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.submit}
            fullWidth
          >
            Sign in
          </Button>
        </form>
      </div>
    </Container>
  )
}

export default Login;