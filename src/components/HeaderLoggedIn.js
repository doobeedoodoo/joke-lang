import React, { useEffect } from "react"
import { Auth } from "aws-amplify"

function HeaderLoggedIn(props) {
  async function signOut() {
    props.setLoggedIn(false)
    localStorage.removeItem("jokeLangUsername")
    try {
      await Auth.signOut()
    } catch (e) {
      console.log("There was an error signing out.")
    }
  }

  return (
    <div className="flex-row my-3 my-md-0">
      <a href="#" className="text-white mr-2 header-search-icon">
        <i className="fas fa-search"></i>
      </a>
      <span className="mr-2 header-chat-icon text-white">
        <i className="fas fa-comment"></i>
        <span className="chat-count-badge text-white"> </span>
      </span>
      <a href="#" className="mr-2">
        {/* TODO: CHANGE AVATAR */}
        <img className="small-header-avatar" src={localStorage.getItem("jokeLangAvatar")} />
      </a>
      <a className="btn btn-sm btn-success mr-2" href="/create-post">
        Create Post
      </a>
      <button onClick={signOut} className="btn btn-sm btn-secondary">
        Sign Out
      </button>
    </div>
  )
}

export default HeaderLoggedIn
