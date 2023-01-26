import React from 'react'
import { StatusBar, StyleSheet, View } from 'react-native'
import { Provider } from 'react-redux'
import { Navigation } from './src/components/Navigation'
import { store } from './src/redux/store'
const App: React.FC = () => {
  console.log('hello world!!!')
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
const styles = StyleSheet.create({})
