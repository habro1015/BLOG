import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditPostPage({ posts }) {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const post = posts.find(post => post.id === id);
    if (post) {
      setTitle(post.title);
      setContent(post.content);
    }
  }, [id, posts]);

  const handleFormSubmit = e => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div>
      <h2>게시글 수정 페이지</h2>
      <form onSubmit={handleFormSubmit}>
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
        <button type="submit">수정 완료</button>
      </form>
    </div>
  );
}

export default EditPostPage;
