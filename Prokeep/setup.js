/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
jest.mock('react-native-simple-toast', () => {
  return {
    SHORT: jest.fn()
  }
})

jest.mock(
  'react-native/Libraries/Components/Touchable/TouchableOpacity.js',
  () => {
    const React = require('react')
    const { TouchableHighlight } = require('react-native')
    const MockTouchable = props => {
      return <TouchableHighlight {...props} />
    }
    MockTouchable.displayName = 'TouchableOpacity'

    return MockTouchable
  }
)
