import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {ProtectedRoute} from './AuthenthicationFiles/protectedRoute';
import DetailedForm from './pages/detailedForm';
import ForgotPassword from './pages/forgotPassword';
import Login from "./pages/login";
import MainPage from './pages/mainpage';
import NotFound from './pages/notfound';
import Register from './pages/register';
import SearchResults from './pages/searchResults';

function App() {
  return (
      <div>
      <Router>
        <Switch>
            <Route exact path="/" component={Login} ></Route>
            <Route exact path="/Register" component={Register} ></Route>
            <Route exact path="/Forgot-Password" component={ForgotPassword} ></Route>
            <ProtectedRoute exact path="/Main-Page" component={MainPage} ></ProtectedRoute>
            <ProtectedRoute exact path="/Search-Results" component={SearchResults} ></ProtectedRoute>
            <ProtectedRoute exact path="/Detailed-Form" component={DetailedForm} ></ProtectedRoute>
            {/* PATH "*" MUST BE THE LAST ONE*/}
            <Route exact path="*" component={NotFound} ></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;