import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const LoginCheck = (props) => {
	const [cookies, setCookie, removeCookie] = useCookies(['id']);
	const [userID, setUserId] = useState(null);
	const navigate = useNavigate();

	const authCheck = () => {
		const token = cookies.id;
		axios
			.post('/api/users/loginCheck', { token: token }) //
			.then((res) => setUserId(res.data.id))
			.catch(() => {
				logOut();
			});
	};

	useEffect(() => {
		authCheck();
	});

	const logOut = () => {
		removeCookie('id');
		navigate('/');
	};

	return (
		<>
			{userID && <h1>{userID}</h1>}
			<button onClick={logOut}>로그아웃</button>
		</>
	);
};
export default LoginCheck;
