import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const PostWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Content = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 8px 14px;
  background-color: #fff;
  color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  padding-right: 10px;
`;

const StyledLink = styled(Link)`
  color: #007bff;
  text-decoration: none;
  margin-right: 10px;
  padding-left: 10px;
`;

const CommentWrapper = styled.div`
  margin-top: 20px;
`;

const CommentForm = styled.form`
  display: flex;
  margin-bottom: 10px;
`;

const CommentInput = styled.input`
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const CommentButton = styled.button`
  padding: 8px 14px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 10px;
`;

const CommentList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const CommentItem = styled.li`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 10px;
`;

const CommentContent = styled.p`
  font-size: 14px;
  margin-bottom: 5px;
`;

function PostPage({ posts, deletePost }) {
  const { id } = useParams();
  const postId = parseInt(id);
  const post = posts.find((post) => post.id === postId);
  const navigate = useNavigate();
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const handleDelete = () => {
    deletePost(postId);
    navigate('/');
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();

    if (comment.trim() === '') {
      return;
    }

    const newComment = {
      id: Date.now(),
      content: comment,
    };

    setComments((prevComments) => [...prevComments, newComment]);
    setComment('');
  };

  if (!post) {
    return <div>게시글을 찾을 수 없습니다.</div>;
  }

  return (
    <PostWrapper>
      <Title>{post.title}</Title>
      <Content>{post.content}</Content>
      <p>username {post.createdAt && post.createdAt.toISOString()}</p>
      <Button onClick={handleDelete}>삭제</Button>
      <StyledLink to={`/post/${id}/edit`}>수정</StyledLink>
      <StyledLink to="/">메인 페이지로 이동</StyledLink>

      <CommentWrapper>
        <h3>댓글</h3>
        <CommentForm onSubmit={handleCommentSubmit}>
          <CommentInput
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="댓글을 입력하세요"
          />
          <CommentButton type="submit">댓글 작성</CommentButton>
        </CommentForm>
        {comments.length > 0 ? (
          <CommentList>
            {comments.map((comment) => (
              <CommentItem key={comment.id}>
                <CommentContent>{comment.content}</CommentContent>
              </CommentItem>
            ))}
          </CommentList>
        ) : (
          <p>댓글이 없습니다.</p>
        )}
      </CommentWrapper>
    </PostWrapper>
  );
}

export default PostPage;
