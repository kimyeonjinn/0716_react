// // src/components/PostCard.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';

// const Card = styled.div`
//   border: 1px solid #eaeaea;
// padding-bottom: 40px;
//   overflow: hidden;
//   transition: transform 0.2s, box-shadow 0.2s;
//   background-color: white;

//   &:hover {
//     transform: translateY(-5px);
//     box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
//   }
// `;




// const Image = styled.img`
//   width: 100%;
//   height: 180px; // 이미지 높이를 조정
//   object-fit: cover;
// `;

// const Text = styled.div`
//   padding: 1rem;
// `;

// const Title = styled.h2`
//   font-size: 1.2rem;
//   margin-bottom: 0.5rem;
//   /* padding: 20px; */
// `;

// const Summary = styled.p`
//   font-size: 0.9rem;
//   color: #666;
//   /* padding: 20px; */
// `;

// const MetaData = styled.div`
//   font-size: 0.8rem;
//   color: #999;
//   margin-top: 0.5rem;
//   /* padding: 20px; */
// `;

// const ReadMoreLink = styled(Link)`
// padding: 20px;
//   color: blue;
//   text-decoration: none;
//   &:hover {
//     text-decoration: underline;
//   }
// `;

// function PostCard({ post }) {
//   return (
//     <Card>
//       <Image src={post.thumbnail} alt={post.title} />
//       <Text>
//       <Title>{post.title}</Title>
//       <Summary>{post.content}</Summary>
//       <Link to={`/post/${post.postID}`}>Read more</Link> {/* 상세 페이지 링크 */}
//       </Text>
//     </Card>
//   );
// }

// export default PostCard;

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #eaeaea;
  padding-bottom: 40px;
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;
  background-color: white;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
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
  margin-bottom: 0.5rem;
`;

const Summary = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 4rem;
`;

const ReadMoreLink = styled(Link)`
  /* padding: 20px; */

  color: blue;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

function PostCard({ post }) {
  return (
    <Card>
      <Image src={post.thumbnail} alt={post.title} />
      <Text>
        <Title>{post.title}</Title>
        <Summary>{post.content}</Summary>
        <ReadMoreLink to={`/detail/${post.postID}`}>Read more</ReadMoreLink>
      </Text>
    </Card>
  );
}

export default PostCard;
