import axios from 'axios';
import React, { useRef } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
	const formRef = useRef();
	const [cookies, setCookie] = useCookies(['id']);
	const navigate = useNavigate();

	const login = (e) => {
		e.preventDefault();
		axios
			.post('/api/users/login', {
				id: formRef.current.id.value,
				password: formRef.current.passWord.value,
			})
			.then((res) => {
				console.log(res.data.msg);
				if (res.data.msg === 'correct') {
					setCookie('id', res.data.token);
					navigate('/loginCheck');
				}
			});
	};

	return (
		<form ref={formRef} onSubmit={login}>
			<input type="text" name="id" placeholder="id" required />
			<input type="password" name="passWord" placeholder="passWord" required />
			<input type="submit"></input>
		</form>
	);
};

export default Login;
