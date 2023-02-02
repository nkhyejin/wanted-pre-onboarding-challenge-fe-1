/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { ColBox, Wrapper } from '../components/common/common';
import InputList from '../components/todo/InputList';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Todo } from '../types/todo';
import { createTodo, getTodos } from '../apis/todoApi';
import { useEffect } from 'react';

const TodoList = () => {
  useEffect(() => {
    (async () => {
      const data = await getTodos();
      //list에 map으로 저장.
    })();
  }, []);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
    getValues,
  } = useForm<Pick<Todo, 'title'>>();
  const handleOnKeyDown: SubmitHandler<Pick<Todo, 'title'>> = async (data) => {
    const responseData = await createTodo(data);
    if (responseData?.status === 200) {
      reset();
      //여기서.....쿼리 무효화ㅏ?
    } else {
      alert('잠시 후에 다시 시도해주세요. ');
    }
  };

  const titleRegister = register('title', {
    required: { value: true, message: '할 일을 입력해주세료.' },
    minLength: { value: 4, message: '4글자 이상 입력해주세요.' },
  });
  return (
    <Wrapper>
      <h2 css={{ marginBottom: '30px' }}>Todo</h2>
      <TodoContainer>
        <form onSubmit={handleSubmit(handleOnKeyDown)}>
          <Input placeholder="무엇을 해야할까요 ?" {...titleRegister} />
        </form>
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
