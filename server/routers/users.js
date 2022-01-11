const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const tokenKey = 'key'; // 토큰 암호화 키(물론 다른 파일에 따로 보관해야한다.)

const users = [{ id: '1', password: '1' }];

router.post('/sign', (req, res) => {
	const { id, password, name } = req.body; // 로그인 정보 가져옴

	users.map((user) => {
		if (user.id === id) {
			return res.status(400).json({ msg: 'duplicate' });
		}
	});

	users.push({ id: String(id), password: String(password), name: name });

	res.status(200).json({
		msg: 'correct',
	});
});

router.post('/login', (req, res) => {
	const { id, password } = req.body; // 로그인 정보 가져옴

	users.map((user) => {
		if ((user.id === id) & (user.password === password)) {
			// Token 생성 (토큰에는 id 값만 넣을 예정)
			const newToken = jwt.sign({ id }, tokenKey, {
				expiresIn: 60, // 1분 유효한 토큰 발급(초 단위)
			});
			return res.status(200).json({ msg: 'correct', token: newToken });
		}
	});
	res.status(400).json({ msg: 'login_fail' });
});

router.post('/loginCheck', (req, res) => {
	const { token } = req.body; // 로그인 정보 가져옴
	const data = jwt.verify(token, tokenKey);
	console.log(data);

	res.status(200).json(data);
});

// // 토큰 유효성 체크 코드
// const { token } = req.body; // 토큰 가져옴
// const data = jwt.verify(token, tokenKey); // 토큰 체크
// return res.status(200).json({ verify: data });

module.exports = router;
