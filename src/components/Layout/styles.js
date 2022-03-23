import styled from 'styled-components';

export const LayoutContainer = styled.div`
  display: grid;
  grid-template-areas:
    'nav-bar main-view buddy-feed'
    'now-playing-bar now-playing-bar now-playing-bar';
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr auto;
  height: 100%;
  min-height: 100%;
  position: relative;
  width: 100%;
`;
