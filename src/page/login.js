import React from 'react'
import { Button, TextField, Container, Grid } from '@material-ui/core';

const Login = () => {
  return (
    <Container maxWidth="xs">
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <h1>Login page</h1>
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
            fullWidth
          >
            Login
          </Button>
        </form>
      </Grid>
    </Container>
  )
}

export default Login;