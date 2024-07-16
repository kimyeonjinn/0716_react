import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { dummy_data } from "../data/dummy_data";

const H1 = styled.h1`
  font-size: 2rem;
  text-align: center;
  font-weight: bold;
`;



const PostDetail = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
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

const Left = styled.p`
display: flex;
gap: 2rem;
`;

function PostDetailPage() {
  const { postID } = useParams();
  const post = dummy_data.find(p => p.postID === parseInt(postID));

  if (!post) {
    return <div>포스트를 찾을 수 없습니다.</div>;
  }

  return (
    <PostDetail>
      <H1>{post.title}</H1>
      <Left>
        <Name>{post.name}</Name>
        <CreatedAt>∙    {post.createdAt}</CreatedAt>
      </Left>
      
      <p>{post.content}</p>
    </PostDetail>
  );
}

export default PostDetailPage;
