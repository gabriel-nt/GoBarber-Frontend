import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  flex-direction: column;

  > header {
    height: 144px;
    background: #28262e;
    display: flex;

    align-items: center;

    div {
      width: 100%;
      max-width: 1120px;
      margin: 0 auto;

      svg {
        color: #999591;
        width: 24px;
        height: 24px;
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  align-items: center;
  justify-content: center;
  margin: -176px 0 auto;

  form {
    margin: 80px 0%;
    width: 340px;

    display: flex;
    flex-direction: column;

    h1 {
      font-size: 20px;
      text-align: left;
      margin-bottom: 24px;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;

      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }

    input[name='old_password'] {
      margin-top: 24px;
    }
  }
`;

export const AvatarInput = styled.div`
  margin-bottom: 32px;
  position: relative;
  align-self: center;

  img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  label {
    position: absolute;
    cursor: pointer;
    width: 48px;
    height: 48px;

    border-radius: 50%;
    background: #ff9000;
    bottom: 0;

    right: 0;
    border: 0;
    transition: background-color 0.2;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 20px;
      height: 20px;
      color: #312e38;
    }

    input {
      display: none;
    }

    &:hover {
      background: ${shade(0.2, '#ff9000')};
    }
  }
`;
