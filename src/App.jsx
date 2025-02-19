import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Tools from './pages/Tools';
import Preview from './pages/Preview';
import Footer from './components/Footer';
import PdfToolViewer from './components/PdfToolViewer';
import Sitemap from './components/Sitemap';
import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1a73e8',
      light: '#4285f4',
      dark: '#0d47a1',
    },
    secondary: {
      main: '#34a853',
      light: '#66bb6a',
      dark: '#1b5e20',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    button: {
      textTransform: 'none',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '8px 16px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          border: '1px solid #e0e0e0',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/preview" element={<Preview />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/tools/convert" element={
            <PdfToolViewer 
              toolName="Convert PDF" 
              description="Convert your PDF to Word, Excel, PowerPoint and more" 
            />
          } />
          <Route path="/tools/merge" element={
            <PdfToolViewer 
              toolName="Merge PDF" 
              description="Combine multiple PDFs into one file" 
            />
          } />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  )
}

export default App
