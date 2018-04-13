import React from 'react';
import { Banner } from '../components/banner';
import { AboutCard } from '../components/card'

const styles = {
  cardsContainer: {
    display: "flex",
    justifyContent: "space-around",
  }
}

export class About extends React.Component {
  render() {
    return (
      <div style={styles}>
        <Banner title="About"/>
        <div style={styles.cardsContainer}>
          <AboutCard />
          <AboutCard />
          <AboutCard />
        </div>
      </div>
    )
  }
}

