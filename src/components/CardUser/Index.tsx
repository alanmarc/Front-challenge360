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
    <Card sx={{ display: 'flex', marginX: 'auto', margin: 10, backgroundColor: '#567de7', borderRadius: 5, justifyContent: 'space-evenly', padding: 4,}}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h2">
            {first}
          </Typography>
          <Typography variant="subtitle1">
            {last}
          </Typography>
          <Typography variant="subtitle1">
            {email}
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 200, borderRadius: '50%' }}
        image={avatar}
        alt="Live from space album cover"
      />
    </Card>
  )
}
