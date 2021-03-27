import './App.css'
import {Route} from 'react-router-dom'
import { Main } from './components/Main/Main'
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Test } from './components/tests/TEST';

function App() {
  return (
    <div>
      <Header />
        <Route path="/" exact render={()=>{return <Main />}} />
        <Route path="/test" render={() => {return <Test />}} />
      <Footer />
    </div>
  );
}

export default App;
