import React from 'react'

import {
  Text,
  TouchableOpacity
} from 'react-native'

import _ from 'lodash'
import PropTypes from 'prop-types'

import styles from './styles'

const Button = (props) => {
  const { label, style, disable, onClick } = props

  return (
        <TouchableOpacity
          onPress={onClick}
          disabled={disable}
        >
            <Text style={[styles.label, disable && styles.disbleButton, style]}>{label}</Text>
        </TouchableOpacity>
  )
}

Button.defaultProps = {
  label: '',
  style: {},
  disable: false,
  onClick: _.noop
}

Button.propTypes = {
  label: PropTypes.string,
  style: PropTypes.object,
  disable: PropTypes.bool,
  onClick: PropTypes.func
}

export default Button
