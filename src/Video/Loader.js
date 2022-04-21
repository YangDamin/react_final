import { React } from 'react';
import { memo } from "react";
import ReactLoading from "react-loading";
import styled from "styled-components";
import "./Loader.css"

const LoaderWrap = styled.div`
  margin-top:50px;
  width: 100%;
  padding-top:50px;
  padding-bottom:70px;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
`;


const Loader = () => {

  return (
    <div>
      <LoaderWrap className="loding">
        <ReactLoading type="spin" color="rgba(201, 201, 201, 1)" style={{ width: '30px', height: '30px' }} />
      </LoaderWrap>
    </div>
  );
};

export default memo(Loader);

