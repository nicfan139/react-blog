import React from 'react';
import { Banner } from '../components/banner';
import { PostContainer } from '../containers/PostContainer';

export class Home extends React.Component {
  render() {
    return (
      <div>
        <Banner title="Trending Posts"/>
        <PostContainer />
      </div>
    )
  }
}
