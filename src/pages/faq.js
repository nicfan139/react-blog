import React from 'react';
import { Banner } from '../components/banner';
import { FaqPanel } from '../components/faqpanel';

export class FAQ extends React.Component {
  render() {
    return (
      <div>
        <Banner title="Frequently Asked Questions" />
        <FaqPanel />
      </div>
    )
  }
}
