/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */


import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { Layout } from 'antd';

import Header from './Header';
import Main from './Main';
import UserPage from './UserPage';
import Footer from './Footer'

const { Sider, Content } = Layout;

class App extends Component {

  render() {
      return (
            <BrowserRouter>
              <div>
                  <Header />
                      <Route exact path='/' component={ Main } />
                      <Route exact path='/:userId' component={ UserPage } />
                  <Footer />
              </div>
            </BrowserRouter>
      )
    }
  }


export default App;
