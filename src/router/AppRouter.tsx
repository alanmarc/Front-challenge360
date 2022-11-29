import React from 'react';
import { Navigate, Route, Routes} from 'react-router-dom';

import { Index } from '../pages/Index';
import {ListUsers } from '../pages/ListUsers';
import ResponsiveAppBar from '../common/header/Index';
import { Login } from '../pages/Login';


export const AppRouter = () => {
  return (
    <>
        <ResponsiveAppBar/>
        <Routes>
            <Route path='/' element={<Index />} />
            <Route path='/listusers' element={<ListUsers />} />
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<Navigate to="/"/>} />
        </Routes>
    </>
  )
}