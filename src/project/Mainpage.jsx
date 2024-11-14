import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './project.css';

// 슬라이더 컴포넌트
const ImageSlider = () => {
  const images = [
    '',
    '',
    '',
  ]; // 이미지 파일 경로 리스트

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="slider">
      <div className="left-arrow" onClick={goToPrevious}>
        ❮
      </div>
      <div className="right-arrow" onClick={goToNext}>
        ❯
      </div>
      <div
        className="slide"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      ></div>
    </div>
  );
};


// 메인 App 컴포넌트
function App() {
  return (
    <Router>
      <div className="app">
        <header className="header">
          <div className="top-bar"></div>
          <nav className="nav-bar">
            <div className="logo">
              <Link to="/" className="showU-link">Show <span className="highlight">U</span></Link>
            </div>
            <input type="text" placeholder="너의 재능을 보여줘" className="search-input" />
            <div className="auth-links">
              <Link to="/upgrade" className="highlight">등급업 신청</Link>
              <span className='highlight'>|</span>
              <Link to="/login" className="highlight">로그인</Link>
              <Link to="/signup" className="showU-link">회원가입</Link>
            </div>
          </nav>
        </header>
          <div className="menu-bar">
            <Link to="/">showU</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/vod" className="highight">VOD</Link>
            <Link to="/reservation">예약</Link>
            <Link to="/hot" className="hot">HOT</Link>
            <Link to="/community">커뮤니티</Link>
            <Link to="/mypage">마이페이지</Link>
          </div>

        {/* 이미지 슬라이더 컴포넌트를 추가 */}
        <ImageSlider />

        {/* 라우트 설정 - 실제 페이지를 연결할 수 있습니다. */}
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/vod" element={<VOD />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/hot" element={<Hot />} />
          <Route path="/community" element={<Community />} />
          <Route path="/mypage" element={<MyPage />} />
          {/* 추가적인 라우트 경로는 이곳에 작성 */}
        {/* </Routes> */}
      </div>
    </Router>
  );
}

export default App;
