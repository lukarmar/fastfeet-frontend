import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  position: absolute;
  width: 150px;
  left: calc(100% - 120px);
  top: calc(50% + 25px);
  height: auto;
  padding: 15px 10px;
  background: #ffffff;
  border-radius: 4px;
  box-shadow: 0px 0px 2px #00000026;

  .tag-wrap {
    filter: drop-shadow(0 -1px 1px #0000001a);
    .tag {
      position: absolute;
      left: calc(46% - 10px);
      top: -36px;
      width: 23px;
      height: 22px;
      background: #ffffff;

      clip-path: polygon(51% 40%, 0% 100%, 100% 100%);
    }
  }
`;

export const ListActions = styled.ul`
  li {
    border-bottom: 1px solid #eeeeee;
    padding: 6px 0 6px 0;
    margin: 6px 0 6px 0;
    text-align: left;

    cursor: pointer;

    display: flex;
    align-items: center;

    &:last-child {
      border-bottom: none;
      padding-bottom: 0;
      margin-bottom: 0;
    }
    &:first-child {
      padding-top: 0;
      margin-top: 0;
    }

    a {
      font-size: 16px;
      color: #999999;
      margin-left: 7px;

      &:hover {
        color: ${darken(0.2, '#999999')};
        font-weight: 600;
      }
    }
  }
`;
