import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Login from './Pages/Login/Login/Login';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <h1>ok</h1>
        <Login></Login>
        <Switch>
          <Route exact path="/">
            <Login></Login>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div >
  );
}

export default App;
