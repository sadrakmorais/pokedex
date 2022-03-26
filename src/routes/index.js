import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import {Home} from '../pages/home'
import {Berryes} from '../pages/berryes'


export function ApplicationRoutes  () {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path='/' element={<Home />}/>
				<Route exact path='/berrie' element={<Berryes/>}/>
			</Routes>
		</BrowserRouter>
	);
};

