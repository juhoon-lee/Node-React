import axios from 'axios';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Sign = (props) => {
	const formRef = useRef();
	const navigate = useNavigate();
	let msg = '';
	const sign = async (e) => {
		e.preventDefault();
		const data = await axios.post('/api/users/sign', {
			id: formRef.current.id.value,
			password: formRef.current.passWord.value,
			name: formRef.current.name.value,
		});
		msg = data.data.msg;
		console.log(msg);
		if (msg === 'correct') {
			navigate('/login');
		}
	};

	return (
		<form ref={formRef} onSubmit={sign}>
			<input type="text" name="name" placeholder="이름" autoFocus />
			<input type="text" name="id" placeholder="학번" />
			<input type="password" name="passWord" placeholder="비밀번호" />
			<input type="password" name="passWordCheck" placeholder="비밀번호 확인" />
			<input type="submit" value="가입"></input>
		</form>
	);
};

export default Sign;
