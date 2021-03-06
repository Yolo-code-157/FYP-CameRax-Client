import React from "react"
import Signup from "./Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import List from "./List"
import Header from "./Header"
import LandingPage from "./LandingPage"

function App() {
  return (
    <>
    <AuthProvider>
      <Header/>
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "70vh" }}
    >
      
      <div className="w-100" style={{ maxWidth: "1500px"}}>
        <Router>
          <Switch>
            <PrivateRoute path="/camera" component={List} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <PrivateRoute path="/update-profile" component={UpdateProfile} />
            <Route exact path="/" component={LandingPage} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
          </Switch>
        </Router>
      </div>
    </Container>
    </AuthProvider>
    </> 
  )
}

export default App
