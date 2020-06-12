import React, { useState } from "react"
import Page from "./Page"
import { Auth } from "aws-amplify"

function HomeGuest(props) {
  const [username, setUsername] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [confirmationCode, setConfirmationCode] = useState()
  const [isSignedUp, setSignedUp] = useState(false)
  const [isConfirmed, setConfirmed] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    if (!isSignedUp) {
      try {
        const user = await Auth.signUp({
          username,
          password,
          attributes: {
            email
          }
        })
        console.log("Registration successful for: " + { user })
      } catch (e) {
        console.log("There was an error submitting the form", e)
      }
      setSignedUp(true)
    } else {
      try {
        await Auth.confirmSignUp(username, confirmationCode)
        console.log("Confirmation code verified.")
        setConfirmed(true)
      } catch (e) {
        console.log("There was an error verifying the confirmation code.", e)
      }
    }
  }

  return (
    <Page wide={true} title="Welcome">
      <div className="row align-items-center">
        <div className="col-lg-7 py-3 py-md-5">
          <h1 className="display-3">May Joke Ka?</h1>
          <p className="lead text-muted">I-share mo yan!</p>
        </div>
        <div className="col-lg-5 pl-lg-5 pb-3 py-lg-5">
          {!isSignedUp && !isConfirmed && (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="username-register" className="text-muted mb-1">
                  <small>Username</small>
                </label>
                <input onChange={e => setUsername(e.target.value)} id="username-register" name="username" className="form-control" type="text" placeholder="Pick a username" autoComplete="off" />
              </div>
              <div className="form-group">
                <label htmlFor="email-register" className="text-muted mb-1">
                  <small>Email</small>
                </label>
                <input onChange={e => setEmail(e.target.value)} id="email-register" name="email" className="form-control" type="text" placeholder="you@example.com" autoComplete="off" />
              </div>
              <div className="form-group">
                <label htmlFor="password-register" className="text-muted mb-1">
                  <small>Password</small>
                </label>
                <input onChange={e => setPassword(e.target.value)} id="password-register" name="password" className="form-control" type="password" placeholder="Create a password" />
              </div>
              <button type="submit" className="py-3 mt-4 btn btn-lg btn-success btn-block">
                Sign up for Joke Lang!
              </button>
            </form>
          )}
          {isSignedUp && !isConfirmed && (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="confirmationcode" className="text-muted mb-1">
                  <small>Confirmation Code</small>
                </label>
                <input onChange={e => setConfirmationCode(e.target.value)} id="confirmationcode" name="confirmationcode" className="form-control" type="text" placeholder="Enter confirmation code" autoComplete="off" />
              </div>
              <button type="submit" className="py-3 mt-4 btn btn-lg btn-success btn-block">
                Register!
              </button>
            </form>
          )}
          {isConfirmed && (
            <div>
              <h3>Registration successful!</h3>
            </div>
          )}
        </div>
      </div>
    </Page>
  )
}

export default HomeGuest
