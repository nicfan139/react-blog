import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from '../pages/home';
import { About } from '../pages/about';
import { FAQ } from '../pages/faq';
import { Profile } from '../pages/profile';
import { Signup } from '../pages/signup';
import { Login } from '../pages/login';

export const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/faq' component={FAQ}/>
      <Route path='/profile' component={Profile}/>
      <Route path='/signup' component={Signup} />
      <Route path='/login' component={Login} />
    </Switch>
  </main>
)

export default Main
