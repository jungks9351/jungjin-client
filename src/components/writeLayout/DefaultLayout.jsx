import React from 'react';
import styled from 'styled-components';

const DefaultLayout = () => {
  return (
    <DefaultWrapper>
      <div className="post-info">
        <textarea
          className="post-content"
          placeholder="내용을 적어주세요"
        ></textarea>
      </div>
      <div className="post-img-box">
        <img
          src="https://via.placeholder.com/300x200/000000/FFFFFF/?text=upload image"
          alt="postImg"
          className="post-img"
        />
      </div>
    </DefaultWrapper>
  );
};

const DefaultWrapper = styled.div`
  width: 70%;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  font-size: 1.4rem;
  .post-img-box {
    width: 100%;
    .post-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .post-info {
    width: 100%;
    border: 2px solid #000;
    .post-content {
      width: 100%;
      height: 100%;
      padding: 2rem;
      font-size: 2rem;
      font-weight: bolder;
      resize: none;
      border: none;
    }
  }
`;

export default DefaultLayout;
