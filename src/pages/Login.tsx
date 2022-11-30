import { Typography, Container } from '@mui/material';
import React from 'react';
import { FormLogin } from '../components/Login/index';

export const Login = () => {
  return (
    <Container sx={{marginBottom: 20}}>
      <Typography
        variant="h1"
        color="primary"
      >
        Login
      </Typography>
      <div className='container-form'>
          <div className='info'>
            <h2>Zoho</h2>
            <p>A central hub where teams can work, plan, and achieve amzing things together </p>
            <img src="https://cynoteck.com/wp-content/uploads/2020/09/real-estate-industry.png"/>
          </div>
          <FormLogin/>
      </div>
    </Container>
  )
}
