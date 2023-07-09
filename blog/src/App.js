import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import NewPostPage from './components/NewPostPage';
import PostPage from './components/PostPage';
import EditPostPage from './components/EditPostPage'; // 수정 페이지 컴포넌트를 import 합니다.
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import './App.css'
function App() {
  const [posts, setPosts] = useState([]);

  const addPost = newPost => {
    setPosts(prevPosts => [newPost, ...prevPosts]);
  };

  const deletePost = id => {
    setPosts(prevPosts => prevPosts.filter(post => post.id !== id));
  };

  return (
    <Router>
      <Header/>
      <div>
        <Routes>
          <Route
            path="/"
            element={<MainPage posts={posts} addPost={addPost} />}
          />
          <Route
            path="/new"
            element={<NewPostPage addPost={addPost} />}
          />
          <Route
            path="/post/:id"
            element={<PostPage posts={posts} deletePost={deletePost} />}
          />
          <Route // 수정 페이지에 대한 라우트를 추가합니다.
            path="/post/:id/edit"
            element={<EditPostPage posts={posts} />}
          />
          <Route path="/login" element={<Login />} /> {/* 로그인 라우트 추가 */}
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
