const express = require('express');
const app = express();
const jwt = require('jsonwebtoken'); // 토큰에 사용(user 라우팅으로 가자)
const users = require('./routers/users');
const port = 5000; // 포트 넘버

app.use(express.json()); // json을 사용할수 있게 해줌

// 아래는 예전 버전으로 express.json() 사용시 필요 없다.
// const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// diretory를 변경해 react-routing 띄우기
// app.use(express.static(path.join(__dirname, '../client/build')));
// app.get('*', (req, res) => {
// 	res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });

// 데이터 받아서 전송 예시
app.get('/api/check', (req, res) => {
	res.send('전송 성공');
});

app.use('/api/users', users); // JWT 토큰으로 로그인, 회원가입 라우팅

// 포트 설정
app.listen(port, () => console.log(port));
