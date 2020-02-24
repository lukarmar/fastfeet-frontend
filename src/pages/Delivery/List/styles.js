import styled from 'styled-components';
import { Form } from '@unform/web';

export const Container = styled.div`
  height: auto;
  width: 100%;
  margin-top: 34px;
  max-width: 1100px;
`;
export const BoxHeader = styled(Form)`
  position: relative;
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;

  strong {
    color: #444444;
    font-size: 24px;
    margin-bottom: 34px;
  }

  div {
    position: relative;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;

    input {
      height: 36px;
      width: 237px;
      background: #ffffff;
      border: 1px solid #dddddd;
      border-radius: 4px;
    }
  }
`;
export const BoxTable = styled.div``;
