import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
//프로그래머스 과제 했을 때 참고해서 디자인
const NewPostWrapper = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
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

const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
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
  padding-top: 5px;
  color: #007bff;
  text-decoration: none;
`;

function NewPostPage({ addPost }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();

    const newPost = {
      id: Date.now(),
      title: title,
      content: content
    };

    addPost(newPost);
    setTitle('');
    setContent('');
    navigate('/');
  };

  return (
    <NewPostWrapper>
      <Title>새 글 작성 </Title>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="title">제목:  </Label>
          <Input
            type="text"
            id="title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="content">본문:  </Label>
          <TextArea
            id="content"
            value={content}
            onChange={e => setContent(e.target.value)}
          />
        </FormGroup>
        <SubmitButton type="submit">작성 완료</SubmitButton>
      </Form>
      <StyledLink to="/">메인 페이지로 이동</StyledLink>
    </NewPostWrapper>
  );
}

export default NewPostPage;
