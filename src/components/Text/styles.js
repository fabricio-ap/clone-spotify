import styled from 'styled-components';

export const CustomText = styled.span`
  font-family: Circular;
  font-weight: ${({ weight }) => weight};
  font-size: ${({ size }) => size}px;
  line-height: ${({ lh }) => lh}px;
  text-transform: none;
  letter-spacing: normal;
`;
