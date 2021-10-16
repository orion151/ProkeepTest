import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    padding: 5,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5
  },
  textInput: {
    fontSize: 18,
    padding: 5,
    backgroundColor: '#f0f0f0'
  },
  validationContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 25,
    paddingTop: 5,
    paddingLeft: 10
  },
  validation: {
    color: 'red'
  }
})

export default styles
