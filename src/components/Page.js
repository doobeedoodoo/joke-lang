import React, { useEffect } from "react"
import Container from "./Container"

function Page(props) {
  useEffect(() => {
    document.title = `Joke Lang!`
    window.scrollTo(0, 0) //Scroll up.
  }, []) //Only run the first time the component is rendered.

  return <Container wide={props.wide}>{props.children}</Container>
}

export default Page
