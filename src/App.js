import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import DetailedFormPage from './pages/detailedForm';
import ForgotPasswordPage from './pages/forgotPassword';
import LoginPage from "./pages/loginPage";
import MainPage from './pages/mainpage';
import NotFoundPage from './pages/notfound';
import RegisterPage from './pages/register';
import SearchResultsPage from './pages/searchResults';
import {ProvideAuth,PrivateRoute,AuthButton, useAuth} from './AuthenthicationFiles/authFiles'

function App() {
  return (
    <ProvideAuth>
      <Router>
        <div>
          <Switch>
            <Route exact path="/forgotPassword" component={ForgotPasswordPage} />
            <Route exact path="/signup" component={RegisterPage} />
            <Route exact path="/" component={LoginPage} />
            <Route exact path="/signin" component={LoginPage} />
            <Route exact path="/SearchResultsPage" component={SearchResultsPage} />
            <Route exact path="/DetailedFormPage" component={DetailedFormPage} />
            <Route exact path="/mainPage" component={MainPage} />
            <Route exact path="/*"  component={NotFoundPage} />
          </Switch>
        </div>
      </Router>
    </ProvideAuth>
  );
}

export default App;