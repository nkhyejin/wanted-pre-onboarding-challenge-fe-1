type TodoProperty = 'title' | 'id' | 'createdAt' | 'updatedAt';

export type Todo = {
  [key in TodoProperty]: string;
};
