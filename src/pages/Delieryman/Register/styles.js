import styled from 'styled-components';
import { darken } from 'polished';
import { Form } from '@unform/web';

export const Container = styled.div`
  height: auto;
  width: 100%;
  margin: 27px 270px 0 270px;
  max-width: 900px;
`;
export const BoxHeader = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  height: auto;
  width: 100%;

  strong {
    color: #444444;
    font-size: 24px;
    margin-bottom: 34px;
  }

  .boxButton {
    display: flex;

    .save {
      button {
        height: 36px;
        width: 112px;
        color: #ffffff;
        text-transform: uppercase;
        font-weight: bold;

        display: flex;
        justify-content: center;
        align-items: center;
        background: #7d40e7;
        border: none;
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
    .comeBack {
      a {
        height: 36px;
        width: 112px;
        color: #ffffff;
        text-transform: uppercase;
        font-weight: bold;

        display: flex;
        justify-content: center;
        align-items: center;
        background: #cccccc;
        border: none;
        border-radius: 4px;
        margin-right: 16px;
        transition: 0.4s ease;

        &:hover {
          background: ${darken(0.08, '#cccccc')};
        }

        svg {
          margin-right: 7px;
        }
      }
    }
  }
`;
export const BoxForm = styled(Form)`
  background: #ffffff;
  padding: 26px 30px 30px 26px;
  width: 100%;
  height: auto;

  .boxSelect {
    display: flex;
    flex: 1;

    > div:first-child {
      margin-right: 30px;
    }

    > div {
      width: 100%;
      height: auto;
      color: #999999;

      span {
        display: none;
      }

      label {
        color: #444444;
        font-weight: bold;
      }

      > div {
        margin-top: 9px;

        > div {
          border: 1px solid #dddddd;
        }
      }
    }
  }

  .boxInput {
    display: flex;
    flex-direction: column;
    margin-top: 16px;

    label {
      color: #444444;
      font-weight: bold;
      margin-bottom: 9px;
    }

    input {
      width: 100%;
      border: 1px solid #dddddd;
      border-radius: 4px;
      padding: 12px 0 12px 12px;
      color: #999999;
    }
  }
`;
