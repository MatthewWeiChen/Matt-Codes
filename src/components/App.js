import logo from '../logo.svg';
import '../styles/App.css';
import Hero from './hero';
import About from './about-me';
import Projects from './projects';
import {Switch, Route} from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";


const theme = createMuiTheme({
  palette: {
    background: {
      default: '#222222'
    },
    primary: {
      main: '#84DCC6',
    },
    secondary: {
      main: '#FFFFFF'
    }
  },
  spacing:8
})

function App() {

  const handleAboutClick = () => {
    return '';
  }

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline/>
      <Switch>
        <Route exact path ='/'>
          <div className="App">
           <Hero aboutClick={handleAboutClick}/>
          </div>
      </Route>
      <Route exact path ='/about'>
        <About/>
      </Route>
      <Route exact path ='/projects'>
        <Projects/>
      </Route>
    </Switch>
    </MuiThemeProvider>
  );
}

export default App;
