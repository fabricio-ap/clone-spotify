import CircularBlack from 'assets/fonts/Circular/CircularStd-Black.otf';
import CircularBold from 'assets/fonts/Circular/CircularStd-Bold.otf';
import CircularRegular from 'assets/fonts/Circular/CircularStd-Book.otf';
import CircularLight from 'assets/fonts/Circular/CircularStd-Light.otf';
import CircularMedium from 'assets/fonts/Circular/CircularStd-Medium.otf';
import { createGlobalStyle } from 'styled-components';

export const Fonts = createGlobalStyle`
  @font-face {
    font-family: 'Circular';
    src: local('Circular'),
    url(${CircularBlack}) format('opentype');
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: 'Circular';
    src: local('Circular'),
    url(${CircularBold}) format('opentype');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Circular';
    src: local('Circular'),
    url(${CircularMedium}) format('opentype');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Circular';
    src: local('Circular'),
    url(${CircularRegular}) format('opentype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Circular';
    src: local('Circular'),
    url(${CircularLight}) format('opentype');
    font-weight: 300;
    font-style: normal;
  }
`;
