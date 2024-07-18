import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { dummy_data } from "../data/dummy_data";

const H1 = styled.h1`
  font-size: 2rem;
  text-align: center;
  font-weight: bold;
`;

const PostDetail = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CreatedAt = styled.p`
  font-size: 0.9rem;
  color: #888;
  text-align: left;
`;

const Name = styled.p`
  font-size: 0.9rem;
  color: #000000;
  text-align: left;
  font-weight: bold;
`;

const Left = styled.div`
  display: flex;
  gap: 2rem;
  width: 100%;
  max-width: 800px;
  justify-content: flex-start;
  margin-bottom: 1rem;
`;

const Thumbnail = styled.img`
  width: 500px;
  height: auto;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
`;

const Tags = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const Tag = styled.span`
  background-color: #f1f1f1;
  color: #28a745;
  padding: 0.5rem 1rem;
  border-radius: 30%;
  font-size: 0.9rem;
  display: flex;
  flex-direction: row;
`;

const FollowButton = styled.button`
  background-color: #ffffff;
  color: #28a745;
  border: 1px solid #28a745;
  border-radius: 3rem;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  width: 100px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 800px;
  align-items: center;
`;

const Nemo = styled.div`
  display: flex;
  width: 800px;
  height: auto;
  background-color: #f1f1f1;
  padding: 1.5rem;
  border-radius: 1rem;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f5f5f5;
  border-radius: 50px;
  padding: 10px;
  width: 50px;
  position: fixed;
  top: 50%;
  left: 200px; /* 화면 왼쪽에 위치 */
  transform: translateY(-50%);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* 버튼 그룹에 그림자 추가 */
`;

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;
  color: ${props => (props.liked ? 'red' : '#666')};
  
  &:focus {
    outline: none;
  }

  & svg {
    margin-bottom: 5px;
    font-size: 24px;
  }
`;

const LikeButton = ({ likeCount, liked, onClick }) => (
  <Button liked={liked} onClick={onClick}>
    <FontAwesomeIcon icon={faHeart} />
    {likeCount}
  </Button>
);

const ShareButton = () => (
  <Button>
    <FontAwesomeIcon icon={faShareAlt} />
  </Button>
);

function PostDetailPage() {
  const { postID } = useParams();
  const post = dummy_data.find((p) => p.postID === parseInt(postID));

  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(Number.isInteger(post.likes) ? post.likes : 0);

  const handleLikeClick = () => {
    setLiked(!liked);
    setLikeCount(likeCount + (liked ? -1 : 1));
  };

  if (!post) {
    return <div>포스트를 찾을 수 없습니다.</div>;
  }

  return (
    <PostDetail>
      <H1>{post.title}</H1>
      <Header>
        <Left>
          <Name>{post.name}</Name>
          <CreatedAt>∙ {post.createdAt}</CreatedAt>
        </Left>
        <FollowButton>팔로우</FollowButton>
      </Header>
      <Tags>
        <Tag>아기사자에서</Tag>
        <Tag>멋쟁이사자로</Tag>
        <Tag>거듭날 수 있기를</Tag>
        <Tag>공부 열시미 하장</Tag>
        <Tag>어려운 리액트</Tag>
        <Tag>하다보면 괜찮아질까?</Tag>
      </Tags>
      <Nemo>
        <h2>멋사분들은 다들 레알 멋쟁이다.</h2>
        <p>그래서 가끔은 헉... 한다 너무 똑똑해서...</p>
      </Nemo>
      <Thumbnail src={post.thumbnail} alt={post.title} />
      <p>{post.content}</p>
      <ButtonGroup>
        <LikeButton likeCount={likeCount} liked={liked} onClick={handleLikeClick} />
        <ShareButton />
      </ButtonGroup>
    </PostDetail>
  );
}

export default PostDetailPage;
