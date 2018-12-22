import styled from 'styled-components';
import theme from '../../styles/theme';

export const H1 = styled.h1`
  color: ${theme.text.secondary};
  font-weight: 700;
  font-size: 38px;
  line-height: 46px;
`;

export const H2 = styled.h2`
  color: ${theme.text.secondary};
  font-weight: 700;
  font-size: 30px;
  line-height: 38px;
`;

export const H3 = styled.h3`
  color: ${theme.text.secondary};
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
`;

export const H4 = styled.h4`
  color: ${theme.text.secondary};
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
`;

export const P = styled.p`
  color: ${theme.text.default};
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

export const Card = styled.div`
  background: #fff;
  box-shadow: 0 0 24px rgba(0, 0, 0, 0.04);
  border-radius: 16px;
  padding: 16px;
  margin: 0;
`;

export const Input = styled.input`
  border: 0;
  border-bottom: 2px solid #c4c4c4;
  color: ${theme.text.default};
  font-size: 22px;
  line-height: 26px;

  &[disabled] {
    opacity: 0.8;
    background: none;
    cursor: not-allowed;
    user-select: none;
  }

  :focus {
    outline: 0;
    border-bottom-color: ${theme.brand.default};
  }

  &::-webkit-input-placeholder {
    color: ${theme.text.placeholder};
  }
  &:-moz-placeholder {
    color: ${theme.text.placeholder};
  }
  &:-ms-input-placeholder {
    color: ${theme.text.placeholder};
  }
`;

export const ErrorMessage = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: ${theme.warn.default};
  text-align: center;
`;