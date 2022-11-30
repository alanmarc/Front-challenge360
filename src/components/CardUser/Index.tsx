import { Container, Typography, Card, Box, CardContent, CardMedia} from '@mui/material';

import React from 'react';

export type UserCard ={
    email: string, 
    first: string,
    last: string,
    avatar: string,
}


export const CardUser = ({ email, first, last, avatar}: UserCard) => {
  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginX: 'auto', marginY: 8, backgroundColor: '#567de7', borderRadius: 5, justifyContent: 'center', paddingY: 10, paddingX: 0}} >
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto', textAlign: 'center' }}>
          <Typography component="div" variant="h2">
            {first}
          </Typography>
          <Typography variant="subtitle2">
            {last}
          </Typography>
          <Typography variant="subtitle2">
            {email}
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 200, borderRadius: '50%' }}
        image={avatar}
        alt="Profile Photo"
      />
    </Card>
  )
}
