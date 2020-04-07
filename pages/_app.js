import App from 'next/app'
import React from 'react'
import Header from 'Components/Header'
import { ConnectedRouter } from 'connected-next-router'
import Initializer from 'Components/Initializer'
import { Provider } from 'react-redux'
import { Grommet } from 'grommet'
import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'

import configureStore from '../redux/configureStore'
import theme from './theme'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    return {
      pageProps: {
        // Call page-level getInitialProps
        ...(Component.getServerSideProps
          ? await Component.getServerSideProps(ctx)
          : {}),
      },
    }
  }

  render() {
    const { Component, pageProps, store } = this.props
    return (
      <Provider store={store}>
        <Grommet theme={theme}>
          <ConnectedRouter>
            <Initializer />
            <Header />
            <Component {...pageProps} />
          </ConnectedRouter>
        </Grommet>
      </Provider>
    )
  }
}
export default withRedux(configureStore)(withReduxSaga(MyApp))
