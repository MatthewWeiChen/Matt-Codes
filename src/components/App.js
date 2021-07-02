import logo from '../logo.svg';
import '../styles/App.css';
import Hero from './hero';
import About from './about-me';
import { CssBaseline } from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    background: {
      default: '#222222'
    },
    primary: {
      main: '#84DCC6',
    }
  }
})

function App() {

  const handleAboutClick = () => {
    return '';
  }

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline/>
    <div className="App">
      <Hero aboutClick={handleAboutClick}/>
    </div>
    </MuiThemeProvider>
  );
}

export default App;
