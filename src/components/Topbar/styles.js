import styled from 'styled-components';

export const TopbarWrapper = styled.div`
  grid-area: main-view;
  height: 64px;
  min-width: 0;
  pointer-events: none;
  z-index: 2;
`;

export const TopbarContainer = styled.header`
  align-items: center;
  display: flex;
  height: 32px;
  justify-content: space-between;
  max-width: calc(100vw - 232px);
  padding: 16px;
  padding-inline-end: 16px;
  position: relative;
  z-index: 3;

  @media screen and (min-width: 1024px) {
    padding: 16px 32px;
    padding-inline-end: 32px;
  }
`;

export const TopbarBackground = styled.div`
  background-color: transparent;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  overflow: hidden;
  pointer-events: none;
  position: absolute;
  transition: background-color 0.25s;
  z-index: -1;
`;

export const NavigationButtonContainer = styled.div`
  display: flex;
`;

export const NavigationButton = styled.button`
  margin-right: 16px;
  cursor: not-allowed;
  opacity: 0.6;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background[100]};
  border: none;
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.text[100]};
  display: inline-flex;
  height: 32px;
  width: 32px;
  justify-content: center;
  position: relative;
`;

export const UserButtonContainer = styled.button`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  border: 0;
  border-radius: 23px;
  color: #fff;
  cursor: pointer;
  display: flex;
  gap: 8px;
  height: 32px;
  justify-content: center;
  margin-inline-start: 16px;
  padding: 2px;
  position: relative;
`;

export const UserButtonImageBox = styled.figure`
  width: 28px;
  height: 28px;
  display: inline-block;
  position: relative;
`;

export const UserButtonImage = styled.img`
  border-radius: 50%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  width: 100%;
  object-position: center center;
`;

export const UserButtonIconBox = styled.div`
  margin-inline-end: 6px;
  height: 16px;
  width: 16px;
`;
