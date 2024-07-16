import React from 'react';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  background-color: white;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  padding: 1rem 0;
`;

const FooterContent = styled.div`
  width: 100%;
  max-width: 1200px; // 최대 너비 설정
  display: flex;
  /* justify-content: center; */
  align-items: center;
  padding: 0 1rem; // 양쪽 여백 설정
`;

function Footer() {
  return (
    <footer>
      <p>&copy; 2024 Velog Clone</p>
    </footer>
  );
}

export default Footer;
