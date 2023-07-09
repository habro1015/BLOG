import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// 스타일을 적용할 컴포넌트를 styled-components로 정의
const Wrapper = styled.div`
  padding: 20px;
  margin-left: 10px;
`;

const Heading = styled.h2`
  font-size: 15px;
  color: #333;
  margin-bottom: 15px;
`;

const PostList = styled.ul`
  list-style: none;
  padding: 0;
`;

const PostItem = styled.li`
  margin-bottom: 10px;
`;

const PostLink = styled(Link)`
  text-decoration: none;
  color: #007bff;

  &:hover {
    text-decoration: underline;
  }
`;

//여기까지 styled-components
function MainPage({ posts, addPost }) {
  const [latestPosts, setLatestPosts] = useState([]);

  useEffect(() => {
    setLatestPosts(posts.slice(0, 10)); // 최근 10개의 글만 보여줌
  }, [posts]);

  return (
    <Wrapper>
      <Heading>게시물 목록</Heading>
      <PostList>
        {latestPosts.map(post => (
          <PostItem key={post.id}>
            <PostLink to={`/post/${post.id}`}>{post.title}</PostLink>
          </PostItem>
        ))}
      </PostList>

    </Wrapper>
  );
}

export default MainPage;
