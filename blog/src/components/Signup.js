import React, { useState } from 'react';
//구현 실패-App.js에 저장 안함
function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = e => {
    e.preventDefault();

    console.log('회원 가입 정보:');
    console.log('사용자명:', username);
    console.log('이메일:', email);
    console.log('비밀번호:', password);
  };

  return (
    <div>
      <h2>회원 가입</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="username">사용자명:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">이메일:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">비밀번호:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">회원 가입</button>
      </form>
    </div>
  );
}

export default Signup;
