import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PostCard from '../components/PostCard';
import styled from 'styled-components';
import { dummy_data } from '../data/dummy_data';

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem 0;
`;

const Content = styled.div`
  width: 100%;
  max-width: 1000px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const sortByLatest = (posts) => {
  return posts.slice().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
};

function HomePage() {
  const [posts, setPosts] = useState(dummy_data);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/latest') {
      setPosts(sortByLatest(dummy_data));
    } else {
      setPosts(dummy_data);
    }
  }, [location]);

  return (
    <HomeContainer>
      <Content>
        {posts.map(post => (
          <PostCard key={post.postID} post={post} />
        ))}
      </Content>
    </HomeContainer>
  );
}

export default HomePage;
