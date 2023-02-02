import { Todo } from '../types/todo';
import { axiosInstance } from './axiosInstance';

//todo 생성
export const createTodo = async (info: Pick<Todo, 'title'>) => {
  try {
    const { status, data } = await axiosInstance.post('/todos', info);
    console.log(status);
    console.log(data);
    return {
      status,
      message: '성공적으로 데이터가  추가되었습니다.',
    };
  } catch (err) {
    console.log(err);
  }
};

export const getTodos = async () => {
  try {
    const { status, data } = await axiosInstance.get('/todos');
    return {
      status,
      data,
    };
  } catch (err) {
    console.log(err);
  }
};
