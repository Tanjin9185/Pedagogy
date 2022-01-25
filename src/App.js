import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Login from './Pages/Login/Login/Login';
import Registration from './Pages/Login/Registration/Registration';
import AuthProvider from './context/AuthProvider';
import Blog from './Pages/blog/Blog'
import PrivateRoute from './Pages/Login/Login/PrivateRoute/PrivateRoute'
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <h1>ok</h1>
          {/* <Login></Login> */}
          <Switch>
            <Route exact path="/registration">
              <Registration></Registration>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/blog">
              <Blog></Blog>
            </PrivateRoute>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div >
  );
}

export default App;
