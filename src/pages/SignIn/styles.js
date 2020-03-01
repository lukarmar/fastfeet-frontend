import styled from 'styled-components';
import { Form } from '@unform/web';
import { darken } from 'polished';

export const Container = styled.div`
  height: auto;
  width: 360px;
  background: #ffffff;
  box-shadow: 0px 0px 10px #00000033;
  border-radius: 4px;
  padding: 60px 30px;
`;
export const BoxLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    height: 44px;
    width: 259px;

    margin-bottom: 40px;
  }
`;
export const BoxForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 100%;

  button {
    background: #7d40e7;
    color: #ffffff;
    font-weight: bold;
    border: none;
    height: 45px;
    padding: 12px 87px;
    border-radius: 4px;

    svg {
      width: 50%;
    }

    &:hover {
      background: ${darken(0.05, '#7D40E7')};
    }
  }
`;

export const BoxInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 15px;

  label {
    color: #444444;
    font-weight: bold;
    margin-bottom: 9px;
    text-transform: uppercase;
  }

  input {
    background: #ffffff;
    border: 1px solid #dddddd;
    border-radius: 4px;
    font-size: 16px;
    height: 45px;
    padding: 12px 0 12px 15px;

    &::placeholder {
      color: #999999;
    }
  }

  span {
    color: #de3b3b;
    font-weight: bold;
  }
`;
