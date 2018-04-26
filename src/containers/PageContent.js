import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from '../pages/home';
import { About } from '../pages/about';
import { FAQ } from '../pages/faq';
import { Signup } from '../pages/signup';
import { Login } from '../pages/login';
import { PostPage } from '../pages/postPage';

const styles = {
  pageContentContainer: {
    marginTop: 64
  }
}

export const PageContent = () => (
  <div style={styles.pageContentContainer}>
    <Switch>
      // For the root, need to specify 'exact' to only render Home when URL exactly matches '/'
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/faq' component={FAQ}/>
      <Route path='/signup' component={Signup} />
      <Route path='/login' component={Login} />
      <Route path='/posts/:postId' component={PostPage} />
    </Switch>
  </div>
)
