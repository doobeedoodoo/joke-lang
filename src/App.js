import React, { useState } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import Header from "./components/Header"
import HomeGuest from "./components/HomeGuest"
import Home from "./components/Home"
import Footer from "./components/Footer"
import About from "./components/About"
import Terms from "./components/Terms"

import Amplify from "aws-amplify"
import aws_exports from "./aws-exports"

Amplify.configure(aws_exports)

function App() {
  const [loggedIn, setLoggedIn] = useState(Boolean(localStorage.getItem("jokeLangUsername")))

  return (
    <BrowserRouter>
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Switch>
        <Route path="/" exact>
          {loggedIn ? <Home /> : <HomeGuest loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
        </Route>
        <Route path="/about-us">
          <About />
        </Route>
        <Route path="/terms">
          <Terms />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default App
