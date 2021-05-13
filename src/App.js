import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ForgotPasswordPage from './pages/forgotPassword';
import LoginPage from "./pages/loginPage";
import MainPage from './pages/mainpage';
import NotFoundPage from './pages/notfound';
import RegisterPage from './pages/register';
import { ProvideAuth, PrivateRoute } from './AuthenthicationFiles/authFiles';

function App() {
  return (
    <ProvideAuth>
      <Router>
        <div>
          <Switch>
            <Route exact path="/forgotPassword">
              <ForgotPasswordPage />
            </Route>
            <Route exact path="/signup">
              <RegisterPage />
            </Route>
            <Route exact path="/">
              <LoginPage />
            </Route>
            <Route exact path="/signin">
              <LoginPage />
            </Route>
            <PrivateRoute exact path="/mainPage/:username">
              <MainPage />
            </PrivateRoute>
            <Route exact path="/*">
              <NotFoundPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </ProvideAuth>
  );
}

export default App;
//<Route exact path="/mainPage" component={MainPage} />