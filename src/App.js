import React, { Suspense } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './themes';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Web from './web';
import LoadingComponent from './components/LoadingComponent';
import S404Screen from './containers/404Screen';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import REDUX from './redux/store';

const  App = () => {
  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Suspense fallback={<LoadingComponent />}>
        <Provider store={REDUX.store}>
          <PersistGate loading={null} persistor={REDUX.persistor}>    
            <Router>
              {/* A <Switch> looks through its children <Route>s and
                  renders the first one that matches the current URL. */}
              <Switch>
                {
                  Web.map(({ component: Component, ...props}, index) => (
                    <Route {...props} key={index}>
                      <Component/>
                    </Route>
                  ))
                }
                <Route path="*">
                  <S404Screen />
                </Route>
              </Switch>
            </Router>
          </PersistGate>
        </Provider>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
