import React from 'react'
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom'
import '../styles/App.css'

import CategoryList from './CategoryList'
import FoodList from './FoodList'
import Food from './Food'


function App() {
	return (
		<Router>
		<div className='main'>
			<div className='button'>
				<button><NavLink className={({ isActive }) =>(isActive ? "active" : "normal")} to={'/'}>Главное меню</NavLink></button>
			</div>

				<Routes>
					
					<Route path={'/foodlist/:id'} element={<FoodList />} />
					<Route exact path={'/food/:id'} element={<Food />} />
					<Route path="/" element={<CategoryList />} />

				</Routes>
			</div>
		</Router>
	)
}

export default App
