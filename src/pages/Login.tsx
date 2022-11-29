import { Typography, Container } from '@mui/material';
import React from 'react'
import { FormLogin } from '../components/Login/index';

export const Login = () => {
  return (
    <Container>
      <Typography
            variant="h1"
            color="primary"
        >
            Login
        </Typography>
        <FormLogin/>
    </Container>
  )
}
