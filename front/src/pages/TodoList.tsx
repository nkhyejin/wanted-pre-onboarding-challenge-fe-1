/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { ColBox, Wrapper } from '../components/common/common';
import InputList from '../components/todo/InputList';

const TodoList = () => {
  return (
    <Wrapper>
      <h2 css={{ marginBottom: '30px' }}>Todo</h2>
      <TodoContainer>
        <Input placeholder="무엇을 해야할까요 ?"></Input>
        <ListContainer>
          <InputList></InputList>
          <InputList></InputList>
          <InputList></InputList>
        </ListContainer>
      </TodoContainer>
    </Wrapper>
  );
};

const Input = styled.input`
  width: 80%;
  height: 50px;
  padding: 0 20px;
  font-size: 18px;
  margin-bottom: 20px;
`;
const TodoContainer = styled(ColBox)`
  justify-content: start;
  padding: 20px;
  width: 500px;
  height: 600px;
  background-color: #ffffea;
  box-shadow: #ccccb2 0px 6px 12px -2px, rgba(0, 0, 0, 0.1) 0px 3px 7px -3px;
  border-radius: 10px;
`;
const ListContainer = styled(ColBox)`
  width: 90%;
  gap: 20px;
`;
export default TodoList;
