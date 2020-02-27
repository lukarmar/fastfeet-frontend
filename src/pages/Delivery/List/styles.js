import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  height: auto;
  width: 100%;
  margin-top: 34px;
  max-width: 1100px;
`;
export const BoxHeader = styled.header`
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

    .boxInput {
      input {
        height: 36px;
        width: 210px;
        background: #ffffff;
        color: #999999;
        border: 1px solid #dddddd;
        border-left: 0;
        border-radius: 4px;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }

      div {
        background: #ffffff;
        height: 36px;
        width: 42px;
        display: flex;
        justify-content: center;
        align-items: center;

        border: 1px solid #dddddd;
        border-right: 0;
        border-radius: 4px;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
    }

    a {
      height: 36px;
      width: 142px;
      color: #ffffff;
      text-transform: uppercase;
      font-weight: bold;
      padding: 9px 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #7d40e7;
      border-radius: 4px;
      transition: 0.4s ease;

      &:hover {
        background: ${darken(0.08, '#7D40E7')};
      }

      svg {
        margin-right: 7px;
      }
    }
  }
`;
export const BoxTable = styled.div``;
