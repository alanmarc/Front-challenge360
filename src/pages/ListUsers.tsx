import React, { useContext, useEffect, useState } from 'react';
import { Typography, Container, Button } from '@mui/material';
import Axios from "axios";
import { ResponseAPI } from '../api/getUsers';
import { CardUser } from '../components/CardUser/Index';
//import {ContextUser, } from '../context/users';



export const ListUsers = () => {
    
    const [users, setUsers] = useState<ResponseAPI[]>([])
    const [baseUrl, setbaseUrl] = useState<number>(1);
    const URL = `https://reqres.in/api/users?page=${baseUrl}`;

    useEffect(() => {
        Axios.get(URL)
        .then(resp => {
            const { data } = resp;
            console.log(data.data);
            let valData = data.data;
            valData.length === 0 ? ( 
                alert("Sin usuarios en esta paginación")
            ) : ( 
                setUsers([
                    ...users,
                    ...data.data
                ])
            );
            
            
        })
        .catch(err => {
            console.error(err);
        });
        
    }, [baseUrl])

    const handleNextPage = () => {
        setbaseUrl( baseUrl + 1);
    }

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
            <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                size="large"
                onClick={ handleNextPage}
              >
                Next Users
              </Button>
        </Container>
    )
}
