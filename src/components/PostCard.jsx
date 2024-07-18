import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const CardWrapper = styled.div`
  border: 1px solid #eaeaea;
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;
  background-color: white;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
`;

const Card = styled(Link)`
  text-decoration: none; // 링크 기본 스타일 제거
  color: inherit; // 텍스트 색상 상속
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const Text = styled.div`
  padding: 1rem;
`;

const Title = styled.h2`
  font-size: 1.2rem;
`;

const Summary = styled.p`
  font-size: 0.9rem;
  color: #666;
`;

const Day = styled.p`
  font-size: 0.8rem;
  color: #999;
  margin: 0;
  /* padding-left: 1rem; */
`;

const Img = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
  margin-left: 1rem;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center; 
  border-top: 1px solid #999;
  /* padding: 0.5rem 1rem; */
  margin-top: 4rem;
  /* margin-left: 1rem; */
`;

const Who = styled.p`
  margin-left: 0.5rem;
  font-size: 0.8rem;
  color: #666;
`;

const LikeButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: ${props => (props.liked ? 'red' : 'black')};
  font-size: 1rem;
  margin-left: 8rem;
  &:focus {
    outline: none;
  }

  & svg {
    margin-right: 0.5rem;
  }
`;

function PostCard({ post }) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(Number.isInteger(post.likes) ? post.likes : 0);

  const handleLike = (e) => {
    e.stopPropagation();
    setLiked(!liked);
    setLikeCount(likeCount + (liked ? -1 : 1));
  };

  return (
    <CardWrapper>
        <Card to={`/detail/${post.postID}`}>
          <Image src={post.thumbnail} alt={post.title} />
          <Text>
            <Title>{post.title}</Title>
            <Summary>{post.content}</Summary>
            <Day>{post.day}</Day>
            </Text>
        </Card>
          <FlexContainer>
            <Img src={post.img} />
            <Who> by {post.who}</Who>
      
      <LikeButton liked={liked} onClick={handleLike}>
        <FontAwesomeIcon icon={faHeart} />
        {likeCount}
      </LikeButton>
      </FlexContainer>    
    </CardWrapper>
  );
}

export default PostCard;
