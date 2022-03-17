import React from "react";
import styled from "styled-components";


const TodoTemplateBlock = styled.div`
  width: 270px;
  height: 400px;

  position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
  background: white;
  border-radius: 16px;
  box-shadow: 10px 10px 10px 0 rgba(0, 0, 0, 0.04);

  display: flex;
  float: right;

  margin-top: 20px;
  margin-bottom: 32px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
`;

function TodoTemplate({ children }) {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}

export default TodoTemplate;