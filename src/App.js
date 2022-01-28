import { ThemeProvider } from '@mui/styles';
import Layout from './components/Layout';
import Home from './pages/Home';
import theme from './theme';

function App() {
  return (
    <main>
      <ThemeProvider theme={theme}>
        <Layout>
          <Home />
        </Layout>
      </ThemeProvider>
    </main>
  );
}

export default App;
