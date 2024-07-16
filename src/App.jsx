// import React from 'react';
// import { Outlet } from 'react-router-dom';
// import Header from './components/Header';
// import PostDetailPage from './pages/PostDetailPage';
// import './App.css';


// function App() {
//   return (
//     <>
//       <Header />
//       <Outlet />
//       <PostDetailPage/>
//     </>
//   );
// }



// export default App;
// //

// // src/App.js

//위에 거가 잘 되긴 하는데 번째가 홈페이지에 떠서 밑에 걸로 한 번 시도함
//오 밑에 걸로 하니까 됨 굳

import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
