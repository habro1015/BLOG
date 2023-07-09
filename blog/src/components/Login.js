import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const LoginWrapper = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 50px;
  border-radius: 4px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 20px;
`;

const StyledLink = styled(Link)`
  margin-top: 10px;
  color: #007bff;
  text-decoration: none;
`;
const StyledLink2 = styled(Link)`
  color: #007bff;
  text-decoration: none;
`;
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleFormSubmit = e => {
    e.preventDefault();//이거 안하니까 굉장히 매우 번거로웠음.
    if (username === 'username' && password === 'password') {
      //구현하지 못해.....로그인을 저장해둠
      navigate('/');
    } else {
      // 로그인 실패 시 alert 
      alert('로그인 실패입니다. 다시 시도해주세요');
      navigate('/');
    }
  };

  return (
    <LoginWrapper>
      <Title>로그인</Title>
      <Form onSubmit={handleFormSubmit}>
        <FormGroup>
          <Label htmlFor="username">사용자명:  </Label>
          <Input
            type="text"
            id="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">비밀번호:  </Label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </FormGroup>
        <SubmitButton type="submit">로그인</SubmitButton>
      </Form>
      <StyledLink to="/">메인 페이지로 이동</StyledLink>
      <br></br>
      <StyledLink2 to="/">회원가입</StyledLink2>
    </LoginWrapper>
  );
}

export default Login;
