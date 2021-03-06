import './App.css';
import {Component} from 'react';
import Main from './components/Main';
import { BrowserRouter, HashRouter} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faHome, faRuler,faUserMd,faWeight,faChartArea, faMugHot } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faHome, faRuler,faUserMd,faWeight,faChartArea,faMugHot);

class App extends Component {
    render() {
        return(
          <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>
        );
    }
}

export default App;
