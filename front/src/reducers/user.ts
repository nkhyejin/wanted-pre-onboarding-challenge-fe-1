//액션
// 이름 겹치지 않도록 처음에 큰 이름 / --
const CHANGENAME = 'user/CHANGE/NAME' as const;
const DELETENAME = 'user/DELETE/NAME' as const;

//액션 생성함수
export const changeName = (name: string) => ({ type: CHANGENAME, name });
export const deleteName = () => ({ type: DELETENAME });

type UserAction = ReturnType<typeof changeName> | ReturnType<typeof deleteName>;

export interface TUserType {
  name: string;
}

//초기값
const userState: TUserType = {
  name: '혜진',
};

const user = (currentState = userState, action: UserAction) => {
  switch (action.type) {
    case CHANGENAME:
      return {
        ...currentState,
        name: currentState.name + action.name,
      };
    case DELETENAME:
      return {
        ...currentState,
        name:
          currentState.name &&
          currentState.name.slice(0, currentState.name.length - 1),
      };
    default:
      return currentState;
  }
};

export default user;
