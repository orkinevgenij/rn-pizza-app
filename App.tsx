import React from 'react'
import { StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import { Navigation } from './src/components/Navigation'
import { store } from './src/redux/store'
const App: React.FC = () => {
  return (
    <>
      <Navigation />
    </>
  )
}

export default () => {
  return (
    <Provider store={store}>
      <StatusBar animated={true} />
      <App />
    </Provider>
  )
}
