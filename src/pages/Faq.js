import React from 'react';
import Banner from '../components/Banner';
import FaqPanel from '../components/FaqPanel';

class FAQ extends React.Component {
  render() {
    return (
      <div>
        <Banner title="Frequently Asked Questions" background="https://images.unsplash.com/photo-1522199780729-a356c844222a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1bd52b437d57c3bfa14ccb7c6985b02e&auto=format&fit=crop&w=752&q=80" />
        <FaqPanel />
      </div>
    )
  }
}

export default FAQ;