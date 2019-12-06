import React from 'react';
import Banner from '../components/Banner';
import PostContainer from '../containers/PostContainer';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Banner title="Trending Posts" background="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c0882af6fc30960d027b31250a10b75d&auto=format&fit=crop&w=751&q=80"/>
        <PostContainer />
      </div>
    )
  }
}

export default Home;