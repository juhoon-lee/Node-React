import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/login';
import LoginCheck from './components/loginCheck';
import Sign from './components/sign';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Sign />}></Route>
			<Route path="/login" element={<Login />}></Route>
			<Route path="/loginCheck" element={<LoginCheck />}></Route>
		</Routes>
	);
}

export default App;
