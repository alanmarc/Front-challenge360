import { Typography, Container } from '@mui/material';
import React from 'react'

export const Index = () => {
  const userValidate = localStorage.getItem('logged');
  const emailUser = localStorage.getItem('email');
  return (
    <Container>
        <Typography
            variant="h1"
            color="primary"
        >
            Desarrollemos el proyecto
        </Typography>
        <Container sx={{marginY: 10}}>
          {userValidate == undefined ? ( <div className='message-error'>No has inciado Sesión !!</div>) : ( <div className='message-login'>Bienvenido: <br/><span>{emailUser}</span></div>)}

        </Container>
    </Container>
  )
}

