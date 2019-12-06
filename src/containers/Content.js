import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import FAQ from '../pages/Faq';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import PostPage from '../pages/PostPage';

const styles = {
  pageContentContainer: {
    marginTop: 64
  }
}

const Content = () => (
  <div style={styles.pageContentContainer}>
    <Switch>
      {/* For the root, need to specify 'exact' to only render Home when URL exactly matches '/' */}
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/faq' component={FAQ}/>
      <Route path='/signup' component={Signup} />
      <Route path='/login' component={Login} />
      <Route path='/posts/:postId' component={PostPage} />
    </Switch>
  </div>
)

export default Content;