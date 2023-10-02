import { MantineProvider, createTheme } from '@mantine/core';
import AuthRoutes from './AuthRoutes';

const theme = createTheme({
  /** Your theme override here */
  fontFamily: 'Inter, sans-serif;',
  fontFamilyMonospace: 'Monaco, Courier, monospace',
  headings: { fontFamily: 'Sora, sans-serif' },
  colors: {
    // 1)purple 2) heading black 3) light text color
    // 0,1,2,3,4,5
    brand: ["#120B48", "#141414", "#434343", "#616163", "#7E7E7E", "#B6B3C6"]
  }
  
});

function App() {
  return (
    <MantineProvider theme={theme}>
      <AuthRoutes />
    </MantineProvider>
  );
}

export default App