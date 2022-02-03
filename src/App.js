import { ThemeProvider } from '@mui/styles';
import Layout from './components/Layout';
import Player from './pages/Player';
import theme from './theme';

function App() {
  return (
    <main>
      <ThemeProvider theme={theme}>
        <Layout>
          <Player />
        </Layout>
      </ThemeProvider>
    </main>
  );
}

export default App;
