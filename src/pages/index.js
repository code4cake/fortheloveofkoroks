import * as React from "react"

import SEO from "../components/seo"
import Icon from "../components/icon"
import Button from "../components/button"

import korokAppearsSoundEffect from '../audio/korok-appears.mp3' 
import "./index.css"

const IndexPage = () => {

  const [currentIndex, setCurrentIndex] = React.useState(0)
  
  const hatList = ['🎩', '👒', '🎓', '🧢', '⛑', '🪖' ]

  const onClick = () => {
    let audio = new Audio(korokAppearsSoundEffect) 
    setCurrentIndex((index) => index < hatList.length - 1 ? index + 1 : 0)
    audio.play()
  }

  return (
    <main>
      <SEO title= "fortheloveofkoroks" />
      <header>
        <h1>For the Love of BOTW</h1>
        <h2>You thought you have found all the Koroks ?</h2>
      </header>
      <section>
        <Button
          className="btn"
          btnText="Show Me Missing Koroks!"
          onClick={onClick}
        />
        <>
          <span role="img" aria-label='hat emoji various'>{hatList[currentIndex]}</span>
          <Icon name="korok" />
          <Icon name="mount" />
        </>
      </section>
      <footer>
        <p>
          Made with{" "}
          <span aria-label="heart emoji" role="img">
            ❤️
          </span>{" "}
          &copy; 2020
        </p>
        <p>#Gatsby</p>
        <p>#SillySiteChallenge</p>
        <p>I finally just finished playing BOTW after spending a whole year trying to finish the game. <span aria-label="upside down emoji" role="img" > 🙃</span></p>
      </footer>
    </main>
  )
}

export default IndexPage
