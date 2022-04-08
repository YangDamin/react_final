import {React} from 'react';
import { memo } from "react";
import ReactLoading from "react-loading";
import styled from "styled-components";

const LoaderWrap = styled.div`
  width: 100%;
  height: 20px;
  padding-top:20px;
  padding-bottom:70px;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
`;


const Loader = () => {
  
  return (
    <div>       
    <LoaderWrap>
      <ReactLoading type="bubbles" color="rgba(201, 201, 201, 1)" />
    </LoaderWrap> 
    </div>
  );
};

export default memo(Loader);

