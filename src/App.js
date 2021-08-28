import React, { Suspense } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './themes';
import { Route, Router, Switch } from 'react-router';
import Web from './web';
import LoadingComponent from './components/LoadingComponent';

const  App = () => {
  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Suspense fallback={<LoadingComponent />}>
        <Router>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            {
              Web.map(({ component, ...props}) => (
                <Route path="/about" {...props} key="">
                  {component}
                </Route>
              ))
            }
          </Switch>
        </Router>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
