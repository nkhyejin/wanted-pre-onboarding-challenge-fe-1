/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { NoneStyleButton } from '../common/button';
import { RowBox } from '../common/common';

const InputList = () => {
  return (
    // <RowBox css={{ backgroundColor: 'red' }}>
    <Box>
      <p css={{ fontSize: '18px' }}>해야할 일 1</p>
      <div>
        <NoneStyleButton varient="normal">수정</NoneStyleButton>
        <NoneStyleButton varient="danger">삭제</NoneStyleButton>
      </div>
      {/* <ErrorMessage>작은에러 </ErrorMessage>
      <LargeErrorMessage>큰에러</LargeErrorMessage> */}
    </Box>
  );
};

const Box = styled(RowBox)`
  width: 100%;
  background-color: #ffffea;

  padding: 0 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid lightgray;
  justify-content: space-between;
`;

export default InputList;
