import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.header`
  width: 100%;
  height: 64px;
  padding: 19px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
  border: 1px solid #dddddd;
`;
export const BoxMenu = styled.nav`
  display: flex;
  align-items: center;

  .boxImage {
    border-right: 1px solid #dddddd;
    padding-right: 30px;

    img {
      width: 135px;
    }
  }

  .boxLinks {
    display: flex;
    height: auto;
    align-items: center;
    justify-content: center;
    padding-left: 30px;

    a {
      color: #999999;
      text-transform: uppercase;
      font-weight: bold;
      margin-right: 21px;
      transition: ease 0.4s;

      &:hover {
        color: ${darken(0.9, '#999999')};
      }
    }
  }
`;
export const BoxUser = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    color: #666666;
    margin-bottom: 5px;
  }

  span {
    cursor: pointer;
    color: #de3b3b;
    text-align: center;
  }
`;
