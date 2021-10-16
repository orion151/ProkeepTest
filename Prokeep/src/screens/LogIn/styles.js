import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'space-around',
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold'
  },
  content: {
    maxWidth: 400
  },
  input: {
    marginBottom: 20
  },
  button: {
    maxWidth: 400
  }
})

export default styles
