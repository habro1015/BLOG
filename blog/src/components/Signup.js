import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

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
    <div>
      <h2>새 글 작성</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">제목:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="content">본문:</label>
          <textarea
            id="content"
            value={content}
            onChange={e => setContent(e.target.value)}
          />
        </div>
        <button type="submit">작성 완료</button>
      </form>
      <Link to="/">메인 페이지로 이동</Link>
    </div>
  );
}

export default NewPostPage;
