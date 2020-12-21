import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Publication from './pages/Publication';
import Work from './pages/Work';
import './styles/output.css';

const App = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/work" component={Work} />
          <Route path="/publication" component={Publication} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
