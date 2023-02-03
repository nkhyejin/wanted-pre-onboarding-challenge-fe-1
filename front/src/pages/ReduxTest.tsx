import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../components/common/button';
import { RootState } from '../reducers';
import { changeName, deleteName } from '../reducers/user';

const ReduxTest = () => {
  const name = useSelector((state: RootState) => state.user.name);
  return (
    <div
      style={{
        backgroundColor: 'white',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h2>{`UserName : ${name}`}</h2>
      <Component1 />
    </div>
  );
};

export default ReduxTest;

const Component1 = () => {
  return (
    <div
      style={{
        backgroundColor: 'red',
        width: '500px',
        height: '500px',
        padding: '20px',
      }}
    >
      <h3>component 1</h3>
      <Component2></Component2>
    </div>
  );
};
const Component2 = () => {
  return (
    <div
      style={{
        backgroundColor: 'yellow',
        width: '90%',
        height: '80%',
        padding: '20px',
      }}
    >
      <h3>component 2</h3>
      <Component3></Component3>
    </div>
  );
};

const Component3 = () => {
  const dispatch = useDispatch();
  return (
    <div
      style={{
        backgroundColor: 'green',
        width: '90%',
        height: '80%',
        padding: '20px',
      }}
    >
      <h3>component 3</h3>
      <Button
        width="80px"
        height="30px"
        type="submit"
        css={{ alignSelf: 'center' }}
        onClick={() => dispatch(changeName('+'))}
      >
        추가
      </Button>
      <Button
        width="80px"
        height="30px"
        type="submit"
        css={{ alignSelf: 'center' }}
        onClick={() => dispatch(deleteName())}
      >
        삭제
      </Button>
    </div>
  );
};
