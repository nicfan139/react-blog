import React from 'react';
import { Banner } from '../components/banner';
import { AboutCard } from '../components/card'

const styles = {
  cardsContainer: {
    display: "flex",
    justifyContent: "space-around",
    padding: "10px 0px"
  }
}

export class About extends React.Component {
  render() {
    return (
      <div style={styles}>
        <Banner title="About" background="https://images.unsplash.com/photo-1512345832640-03da30ef0762?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ad41fed35492cb8babdf2550e5a67581&auto=format&fit=crop&w=750&q=80"/>
        <div style={styles.cardsContainer}>
          <AboutCard />
          <AboutCard />
          <AboutCard />
        </div>
      </div>
    )
  }
}

