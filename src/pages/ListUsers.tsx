import React, { useEffect, useState } from 'react';
import { Typography, Container } from '@mui/material';
import { ResponseAPI } from '../api/getUsers';
import { CardUser } from '../components/CardUser/Index';
import { getUsers } from '../utils/getUser';



export const ListUsers = () => {
    
    const [users, setUsers] = useState<ResponseAPI[]>([])

    useEffect(() => {
        
        getUsers().then(data => setUsers(data))
        
    }, [])
    return (
        <Container >
            <Typography
                variant="h1"
                color="primary"
            >
                Lista de Usuarios
                
            </Typography>
            
            { users.map(({id, email, first_name, last_name, avatar}) =>(
                <Container key={id} >
                    <CardUser 
                    email={email}
                    first={first_name}
                    last={last_name}
                    avatar={avatar}
                    />
                </Container>
            ))}
            
        </Container>
    )
}
