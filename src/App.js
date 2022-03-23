import { Layout } from 'components';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme';
import { Fonts } from 'theme/fonts';
import './index.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Fonts />
      <Layout></Layout>
    </ThemeProvider>
  );
}

export default App;
