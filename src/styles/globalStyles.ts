import { StyleSheet } from 'react-native'
import colors from './colors'

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  textStyle: {
    fontSize: 15,
    color: colors.black,
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: '500',
    color: colors.black,
  },
  typeStyle: {
    color: colors.black,
    backgroundColor: colors.gray,
    fontSize: 15,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
  },
  active: {
    backgroundColor: colors.black,
    color: 'white',
  },
  sizeStyle: {
    color: colors.black,
    backgroundColor: colors.gray,
    fontSize: 15,
    marginHorizontal: 8,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  buttonStyle: {
    backgroundColor: colors.orange,
    borderRadius: 20,
    paddingHorizontal: 50,
    paddingVertical: 15,
    color: '#fff',
  },
})
