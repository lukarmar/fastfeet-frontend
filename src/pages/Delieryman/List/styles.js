import styled from 'styled-components';
import { darken, opacify } from 'polished';
import Avatar from 'react-avatar';

export const Container = styled.div`
  height: auto;
  width: 100%;
  margin: 34px 120px 0 120px;
  max-width: 1200px;
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
export const BoxTable = styled.div`
  width: 100%;
  height: auto;
`;
export const ListTable = styled.table`
  width: 100%;

  th {
    font-size: 16px;
    font-weight: bold;
    color: #444444;
    text-align: left;
    padding: 0 25px 0 25px;
    &:last-child {
      text-align: right;
    }
  }

  td {
    background: #ffffff;
    font-size: 16px;
    color: #666666;
    padding: 20px 25px 14px 25px;
    text-align: left;
    min-width: 120px;
    height: 18px;

    position: relative;

    &:first-child {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
    &:last-child {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
      padding-right: 40px;
      text-align: right;
    }

    .PENDENTE {
      width: 100%;
      color: #c1bc35;
      font-weight: bold;
      padding: 5px 10px 5px 10px;
      border-radius: 12px;
      background: #f0f0df;
      font-size: 14px;

      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        margin-right: 6px;
      }
    }
    .ENTREGUE {
      width: 100%;
      color: #2ca42b;
      font-weight: bold;
      padding: 5px 10px 5px 10px;
      border-radius: 12px;
      background: #dff0df;
      font-size: 14px;

      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        margin-right: 6px;
      }
    }
    .RETIRADA {
      width: 100%;
      color: #4d85ee;
      font-weight: bold;
      padding: 5px 10px 5px 10px;
      border-radius: 12px;
      background: #bad2ff;
      font-size: 14px;

      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        margin-right: 6px;
      }
    }
    .CANCELADA {
      width: 100%;
      color: #de3b3b;
      font-weight: bold;
      padding: 5px 10px 5px 10px;
      border-radius: 12px;
      background: #fab0b0;
      font-size: 14px;

      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        margin-right: 6px;
      }
    }

    .boxOptions {
      svg {
        cursor: pointer;
        color: #c6c6c6;

        &:hover {
          color: ${darken(0.3, '#c6c6c6')};
        }
      }
    }
  }
  border-spacing: 0 21px;
`;

export const LetterInAvatar = styled(Avatar)`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: 5px;

  span {
    font-size: 16px;
  }
`;
